import { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const city = 'Bridgwater,GB';
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
      .then(res => setWeather(res.data))
      .catch(console.error);
  }, []);

  if (!weather) return <div>Loading weather...</div>;

  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 pt-32 mb-6 flex items-top gap-6">
      <img
        src={iconUrl}
        alt={weather.weather[0].description}
        className="w-20 h-20"
      />
      <div>
        <h2 className="text-xl font-semibold mb-2">
          Weather in {weather.name}
        </h2>
        <p className="capitalize text-gray-600 mb-1">
          {weather.weather[0].description}
        </p>
        <p className="text-3xl font-bold">{Math.round(weather.main.temp)}&deg;C</p>
        <p className="text-sm text-gray-500">
          Feels like: {Math.round(weather.main.feels_like)}&deg;C
        </p>
        <p className="text-sm text-gray-500">Humidity: {weather.main.humidity}%</p>
      </div>
    </div>
  );
};

export default Weather;
