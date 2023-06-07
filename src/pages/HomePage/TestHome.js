import React, { useState, useEffect } from "react";
import WeatherToday from "../../components/Weather/Today/TestToday";
import WeatherForecast from "../../components/Weather/Next3Days/TestDays";
import WeatherWeek from "../../components/Weather/Week/TestWeek";
import axios from "axios";

const TestHome = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [weekData, setWeekData] = useState([]);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [searched, setSearched] = useState(false);
  const API_KEY = "74ba5397116ed1285fd2f90f07ce0132";

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
      );
      setWeatherData(response.data.current);
      setForecastData(response.data.daily.slice(1, 4));
      setWeekData(response.data.daily);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (searched) {
      fetchData();
    } else {
      // Default location (Colombo)
      setLatitude("6.9271");
      setLongitude("79.8612");
      fetchData();
    }
  }, [searched, latitude, longitude]);

  const handleSearch = () => {
    setSearched(true);
    // fetchData();
  };

  return (
    <div>
      <h1>Weather Forecast</h1>
      <div>
        <label htmlFor="latitude">Latitude: </label>
        <input
          type="text"
          id="latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="longitude">Longitude: </label>
        <input
          type="text"
          id="longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
      </div>
      <button onClick={handleSearch}>Search</button>
      {weatherData && <WeatherToday weatherData={weatherData} />}
      {forecastData.length > 0 && (
        <WeatherForecast forecastData={forecastData} />
      )}
      {weekData.length > 0 && <WeatherWeek weekData={weekData} />}
    </div>
  );
};

export default TestHome;
