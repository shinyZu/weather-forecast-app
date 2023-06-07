import React from "react";

const WeatherWeek = ({ weekData }) => {
  return (
    <div>
      <h2>Weather Forecast for the Whole Week</h2>
      {weekData.map((day, index) => (
        <div key={index}>
          <p>Date: {day.date}</p>
          <p>Temperature: {day.temp}°C</p>
          <p>Description: {day.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherWeek;
