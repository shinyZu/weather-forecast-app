import React, { useState, useEffect } from "react";
import { styleSheet } from "./styles";
import { withStyles } from "@mui/styles";

const WeatherCard = (props) => {
  // console.log(props);
  const { classes, forecastFor } = props;

  const [time, setTime] = useState("");

  const [date, setDate] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const [day, setDay] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");

  const [weatherDetails, setDetails] = useState(null);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    console.log(forecastFor);
    if (forecastFor == "Today") {
      if (props.todayDetails == null) {
        return <div>Loading...</div>;
      }

      console.log(props.todayDetails);

      const { name, main, weather } = props.todayDetails;

      setDayOfWeek("Today");
      getTodayDate();

      converDate(formattedDate);
      setDate(formattedDate);

      getTimeNow();

      setCity(name);
      setTemp(main.temp);
      setDescription(weather[0].description);
      setIcon(weather[0].icon);
    }

    if (props.forecastFor == "Next3") {
      // console.log(props.detailsOfNext3Days);

      const { date, temp, description, icon } = props.detailsOfNext3Days;

      setDate(date);
      converDate(date);

      convertTime(date);

      setTemp(temp);
      setDescription(description);
      setIcon(icon);
    }

    if (props.forecastFor == "Week") {
      // console.log(props.weekData);
      const { date, temp, description, icon } = props.weekData;
      setDate(date);
      converDate(date);

      convertTime(date);

      setTemp(temp);
      setDescription(description);
      setIcon(icon);
    }
    // }, [formattedDate, day, dayOfWeek, month, year, time, city]);
  });

  const getTodayDate = () => {
    const today = new Date();
    const yy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");

    setFormattedDate(`${yy}-${mm}-${dd}`);
  };

  const getTimeNow = () => {
    const now = new Date();

    // Get the current year, month, day, hour, minute, and second
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    // Format the time as a string
    const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    // console.log(formattedTime); // "2023-06-06 15:00:00"
    convertTime(formattedTime);
  };

  const converDate = (dateString) => {
    const dateObj = new Date(dateString);
    let monthIndex = dateObj.getMonth() + 1;
    const options = { weekday: "long" };
    const dayOfWeek = dateObj.toLocaleString("default", options);

    setDay(dateObj.getDate());
    setDayOfWeek(dayOfWeek);
    setMonth(months[monthIndex]);
    setYear(dateObj.getFullYear());
  };

  const convertTime = (datetimeString) => {
    // const timeString = "2023-06-06 15:00:00";

    // Split the time string at the space character
    const [date, time] = datetimeString.split(" ");

    // Extract the hours and minutes from the time string
    const formattedTime = time.substring(0, 5);

    // console.log(formattedTime); // "15:00"
    setTime(formattedTime);
  };

  return (
    <div className={classes.card_container}>
      {props.forecastFor == "Today" ? (
        <p className={classes.txt_week_day}>Today</p>
      ) : (
        <p className={classes.txt_week_day}>{dayOfWeek}</p>
      )}

      <p className={classes.txt_date_str}>{`${month} ${day}, ${year}`}</p>
      <p className={classes.txt_time}>{time} hrs</p>
      <p className={classes.txt_temp}>{temp}°C</p>
      <p className={classes.description}>{description}</p>
      <div className={classes.icon_container}>
        <img
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt={description}
          style={{ width: "60px", height: "60px" }}
        />
      </div>
    </div>
  );
};

// export default WeatherCard;
export default withStyles(styleSheet)(WeatherCard);
