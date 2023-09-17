import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const apiKey = 'c6282b7a1dc457524defdc6c0ec9c3e6'; 

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    
    <div className="App">
      <h1>Weather App</h1>
      <h5>This weather application will provide users with real-time weather information.</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter city"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
      {weather && (
        <div className="weather-info">
           <h2>{weather.name},{weather.sys.country}</h2>   
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind: {weather.wind.speed} m/s</p>
        </div>
      )
      }
    </div>
    
  );
}

export default App;
