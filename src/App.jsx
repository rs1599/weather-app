import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import { fetchWeather } from "./utils";

export default function App() {
  const [city, setCity] = useState("Tokyo");
  const [weather, setWeather] = useState(null);
  const [history, setHistory] = useState([]);

  const handleSearch = async () => {
    const data = await fetchWeather(city);
    if (data) {
      setWeather(data);
      setHistory((prev) => [...new Set([city, ...prev])]);
    }
  };

  return (
    <div className={`min-h-screen p-6 ${weather?.main?.temp > 25 ? "bg-orange-100" : "bg-blue-100"} transition-colors`}>
      <h1 className="text-3xl font-bold mb-4 text-center">🌤️ 天気確認アプリ</h1>
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-2 rounded w-full md:w-64"
          placeholder="Enter city"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Search
        </button>
      </div>

      {weather && <WeatherCard data={weather} />}

      {history.length > 0 && (
        <div className="mt-6 text-center">
          <h2 className="font-semibold">Search History</h2>
          <div className="flex flex-wrap gap-2 justify-center mt-2">
            {history.map((c) => (
              <button
                key={c}
                className="bg-gray-200 px-2 py-1 rounded"
                onClick={() => {
                  setCity(c);
                  fetchWeather(c).then(setWeather);
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
