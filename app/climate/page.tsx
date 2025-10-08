"use client";

import { useEffect, useState } from "react";
import * as ss from "simple-statistics";

type ClimateResults = {
  avgTemp: number;
  rainProb: number;
  heatwaveProb: number;
  extremeRainProb: number;
};

export default function ClimateAnalysis() {
  const [results, setResults] = useState<ClimateResults | null>(null);

  useEffect(() => {
    async function fetchData() {
      const url =
        "https://power.larc.nasa.gov/api/projection/daily/point?start=2025&end=2026&latitude=5.5592846&longitude=-0.1974306&community=ag&parameters=T2M,T2M_MAX,T2M_MIN,T2MDEW,RH2M,PRECTOT,WS10M&format=json&user=Junior&header=true&time-standard=utc&model=ensemble&scenario=ssp126";

      const res = await fetch(url);
      const data = await res.json();

      const params = data.properties.parameter;
      console.log(params);
      const temps = Object.values(params.T2M) as number[];
      const maxTemps = Object.values(params.T2M_MAX) as number[];
      const rain = Object.values(params.PRECTOT) as number[];

      // Average temp
      const avgTemp = ss.mean(temps);

      // Probability of rain (>1mm)
      const rainDays = rain.filter((v) => v > 1).length;
      const rainProb = rainDays / rain.length;

      // Heatwave (90th percentile)
      const heatThresh = ss.quantile(maxTemps, 0.9);
      const heatwaveDays = maxTemps.filter((v) => v > heatThresh).length;
      const heatwaveProb = heatwaveDays / maxTemps.length;

      // Extreme rain (95th percentile)
      const rainThresh = ss.quantile(rain, 0.95);
      const extremeRainDays = rain.filter((v) => v > rainThresh).length;
      const extremeRainProb = extremeRainDays / rain.length;

      setResults({ avgTemp, rainProb, heatwaveProb, extremeRainProb });
    }

    fetchData();
  }, []);

  if (!results) return <p>Loading...</p>;

  return (
    <div className="p-6 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-4">Climate Insights</h2>
      <p>🌡️ Average Temp: {results.avgTemp.toFixed(2)} °C</p>
      <p>🌧️ Rain Probability: {(results.rainProb * 100).toFixed(1)} %</p>
      <p>
        🔥 Heatwave Probability: {(results.heatwaveProb * 100).toFixed(1)} %
      </p>
      <p>
        💧 Extreme Rain Probability:{" "}
        {(results.extremeRainProb * 100).toFixed(1)} %
      </p>
    </div>
  );
}
