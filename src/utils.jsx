const API_KEY = "df467e63135874613093643912b075a7";
export async function fetchWeather(city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ja`
    );
    if (!res.ok) throw new Error("見つかりませんでした");
    return await res.json();
  } catch (err) {
    alert(err.message);
    return null;
  }
}
