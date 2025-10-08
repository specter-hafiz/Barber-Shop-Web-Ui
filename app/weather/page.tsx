"use client";
import { useState } from "react";

export default function WeatherPage() {
  const [latitude, setLatitude] = useState("5.5592846");
  const [longitude, setLongitude] = useState("-0.1974306");
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchWeather() {
    setLoading(true);
    setData(null);

    const params = new URLSearchParams({
      latitude,
      longitude,
    });
    if (date) params.set("date", date);
    if (start && end) {
      params.set("start", start);
      params.set("end", end);
    }

    try {
      const res = await fetch(`/api/climate?${params.toString()}`);
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("Error fetching weather:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🌍 Weather Risk Dashboard</h1>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <input
          className="border p-2 rounded"
          placeholder="Latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          placeholder="Longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />

        <input
          className="border p-2 rounded"
          placeholder="Single Date (YYYYMMDD)"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            setStart("");
            setEnd("");
          }}
        />
        <div className="flex gap-2">
          <input
            className="border p-2 rounded flex-1"
            placeholder="Start (YYYYMMDD)"
            value={start}
            onChange={(e) => {
              setStart(e.target.value);
              setDate("");
            }}
          />
          <input
            className="border p-2 rounded flex-1"
            placeholder="End (YYYYMMDD)"
            value={end}
            onChange={(e) => {
              setEnd(e.target.value);
              setDate("");
            }}
          />
        </div>
      </div>

      <button
        onClick={fetchWeather}
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {loading ? "Loading..." : "Check Weather"}
      </button>

      {data && (
        <div className="mt-6 border p-4 rounded bg-gray-50">
          <h2 className="font-semibold text-lg mb-2">📊 Results</h2>
          <pre className="whitespace-pre-wrap text-black text-sm">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
