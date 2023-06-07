import React from "react";

const WeatherToday = ({ weatherData }) => {
  return (
    <div>
      <h2>Today's Weather</h2>
      <p>City: {weatherData.name}</p>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Description: {weatherData.weather[0].description}</p>
    </div>
  );
};

export default WeatherToday;
