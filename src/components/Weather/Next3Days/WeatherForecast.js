import React from "react";
import WeatherCard from "../Card/WeatherCard";
import { styleSheet } from "./styles";
import { withStyles } from "@mui/styles";

const WeatherForecast = ({ forecastData }) => {
  // console.log(forecastData);
  return (
    <>
      {/* <h2>Weather Forecast for the Next 3 Days</h2> */}
      {/* {forecastData.map((forecast, index) => (
        <div key={index}>
          <p>Date: {forecast.date}</p>
          <p>Temperature: {forecast.temp}°C</p>
          <p>Description: {forecast.description}</p>
          <img
            src={`http://openweathermap.org/img/w/${forecast.icon}.png`}
            alt={forecast.description}
            style={{ width: "60px", height: "60px" }}
          />
        </div>
      ))} */}

      {forecastData.map((forecast, index) => (
        <div key={index}>
          <WeatherCard forecastFor="Next3" detailsOfNext3Days={forecast} />
        </div>
      ))}
    </>
  );
};

// export default WeatherForecast;
export default withStyles(styleSheet)(WeatherForecast);
