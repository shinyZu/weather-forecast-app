import React from "react";
import WeatherCard from "../Card/WeatherCard";

const WeatherWeek = ({ weekData }) => {
  return (
    // <div>
    //   <h2>Weather Forecast for the Whole Week</h2>
    //   {weekData.map((day, index) => (
    //     <div key={index}>
    //       <p>Date: {day.date}</p>
    //       <p>Temperature: {day.temp}°C</p>
    //       <p>Description: {day.description}</p>
    //       <img
    //         src={`http://openweathermap.org/img/w/${day.icon}.png`}
    //         alt={day.description}
    //         style={{ width: "60px", height: "60px" }}
    //       />
    //     </div>
    //   ))}
    // </div>

    <>
      {weekData.map((day, index) => (
        <div key={index}>
          <WeatherCard forecastFor="Week" weekData={day} />
        </div>
      ))}
    </>
  );
};

export default WeatherWeek;
