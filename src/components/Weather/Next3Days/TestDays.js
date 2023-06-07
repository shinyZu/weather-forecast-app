import React from "react";

const WeatherForecast = ({ forecastData }) => {
  return (
    <div>
      <h2>Weather Forecast for the Next 3 Days</h2>
      {forecastData.map((forecast, index) => (
        <div key={index}>
          <p>Date: {forecast.date}</p>
          <p>Temperature: {forecast.temp}°C</p>
          <p>Description: {forecast.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;
