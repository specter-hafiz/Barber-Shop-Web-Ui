import { NextResponse } from "next/server";
import * as ss from "simple-statistics";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const latitude = searchParams.get("latitude") || "5.5592846";
    const longitude = searchParams.get("longitude") || "-0.1974306";
    const date = searchParams.get("date"); // YYYYMMDD
    const start = searchParams.get("start");
    const end = searchParams.get("end");

    if (!date && (!start || !end)) {
      return NextResponse.json(
        {
          error:
            "Provide either `date=YYYYMMDD` or `start=YYYYMMDD&end=YYYYMMDD`.",
        },
        { status: 400 }
      );
    }

    // NASA POWER API with extra parameters
    const url = `https://power.larc.nasa.gov/api/projection/daily/point?start=${
      date || start
    }&end=${
      date || end || date
    }&latitude=${latitude}&longitude=${longitude}&community=re&parameters=PRECTOTCORR,T2M,T2M_MAX,T2M_MIN,WS10M,RH2M,ALLSKY_SFC_SW_DWN&format=json&user=Junior&header=true&time-standard=utc&model=ensemble&scenario=ssp126`;

    const res = await fetch(url);
    const data = await res.json();

    if (!data?.properties?.parameter) {
      return NextResponse.json(
        { error: "No data returned for given parameters" },
        { status: 404 }
      );
    }

    const params = data.properties.parameter;
    const rainData = params.PRECTOTCORR;
    const tAvgData = params.T2M;
    const tMaxData = params.T2M_MAX;
    const tMinData = params.T2M_MIN;
    const windData = params.WS10M;
    const rhData = params.RH2M;

    // ---- Thresholds (data-backed) ----
    const thresholds = {
      hot: 32, // °C
      extremeHot: 40, // °C
      cold: 5, // °C
      wet: 10, // mm/day
      windy: 8, // m/s ~ 30 km/h
      uncomfortableHeatIndex: 30, // °C apparent temperature
    };

    // ---- Heat Index function (Steadman formula simplified) ----
    function heatIndex(T, RH) {
      // T in °C, RH in %
      const c1 = -8.784695;
      const c2 = 1.61139411;
      const c3 = 2.338549;
      const c4 = -0.14611605;
      const c5 = -0.012308094;
      const c6 = -0.016424828;
      const c7 = 0.002211732;
      const c8 = 0.00072546;
      const c9 = -0.000003582;

      return (
        c1 +
        c2 * T +
        c3 * RH +
        c4 * T * RH +
        c5 * T * T +
        c6 * RH * RH +
        c7 * T * T * RH +
        c8 * T * RH * RH +
        c9 * T * T * RH * RH
      );
    }

    // ✅ SINGLE DATE MODE
    if (date) {
      const rain = rainData[date];
      const tAvg = tAvgData[date];
      const tMax = tMaxData[date];
      const tMin = tMinData[date];
      const wind = windData[date];
      const rh = rhData[date];
      const hi = heatIndex(tAvg, rh);

      return NextResponse.json({
        mode: "single-day",
        date,
        location: { latitude, longitude },
        metrics: {
          rain,
          tempAvg: tAvg,
          tempMax: tMax,
          tempMin: tMin,
          wind,
          relativeHumidity: rh, // ✅ added as explicit field
          heatIndex: hi,
        },
        conditions: {
          veryHot: tMax > thresholds.hot,
          extremeHeat: tMax > thresholds.extremeHot,
          veryCold: tMin < thresholds.cold,
          veryWet: rain > thresholds.wet,
          veryWindy: wind > thresholds.windy,
          veryUncomfortable: hi > thresholds.uncomfortableHeatIndex,
          willRain: rain > 1,
        },
      });
    }

    // ✅ RANGE MODE
    const dates = Object.keys(rainData);

    const dailyResults = dates.map((d) => {
      const rain = rainData[d];
      const tAvg = tAvgData[d];
      const tMax = tMaxData[d];
      const tMin = tMinData[d];
      const wind = windData[d];
      const rh = rhData[d];
      const hi = heatIndex(tAvg, rh);

      return {
        date: d,
        metrics: {
          rain,
          tempAvg: tAvg,
          tempMax: tMax,
          tempMin: tMin,
          wind,
          relativeHumidity: rh, // ✅ included for each day
          heatIndex: hi,
        },
        conditions: {
          veryHot: tMax > thresholds.hot,
          extremeHeat: tMax > thresholds.extremeHot,
          veryCold: tMin < thresholds.cold,
          veryWet: rain > thresholds.wet,
          veryWindy: wind > thresholds.windy,
          veryUncomfortable: hi > thresholds.uncomfortableHeatIndex,
          willRain: rain > 1,
        },
      };
    });

    return NextResponse.json({
      mode: "range",
      start,
      end,
      location: { latitude, longitude },
      thresholds,
      daily: dailyResults,
    });
  } catch (error) {
    console.error("Error fetching climate data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
