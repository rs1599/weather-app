export default function WeatherCard({ data }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-md mx-auto mt-6">
      <h2 className="text-2xl font-bold">{data.name}</h2>
      <p className="text-gray-600">{data.weather[0].description}</p>
      <p className="text-4xl font-bold mt-2">{Math.round(data.main.temp)}°C</p>
    </div>
  );
}