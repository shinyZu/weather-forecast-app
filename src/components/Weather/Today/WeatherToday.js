import React, { useState, useEffect } from "react";
import WeatherCard from "../Card/WeatherCard";
import { styleSheet } from "./styles";
import { withStyles } from "@mui/styles";

const WeatherToday = (props) => {
  // console.log(props);
  const { classes, weatherData } = props;

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  console.log(weatherData);

  return (
    // <div className={classes.main_container_today}>
    //   {/* <h2>Today's Weather in {name}</h2> */}
    //   <WeatherCard forecastFor="Today" todayDetails={weatherData} />
    //   {/* <p>Temperature: {main.temp}°C</p>
    //   <p>Description: {weather[0].description}</p>
    //   <img
    //     src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
    //     alt={weather[0].description}
    //     style={{ width: "60px", height: "60px" }}
    //   /> */}
    // </div>
    <>
      {/* <div className={classes.main_container_today}> */}
      <WeatherCard forecastFor="Today" todayDetails={weatherData} />
      {/* </div> */}
    </>
  );
};

// export default WeatherToday;
export default withStyles(styleSheet)(WeatherToday);
