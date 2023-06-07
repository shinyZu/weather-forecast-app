import React, { useState, useEffect } from "react";
import WeatherToday from "../../components/Weather/Today/WeatherToday";
import WeatherForecast from "../../components/Weather/Next3Days/WeatherForecast";
import WeatherWeek from "../../components/Weather/Week/WeatherWeek";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "../../axios";
import { styleSheet } from "./styles";
import { withStyles } from "@mui/styles";
import MyTextField from "../../components/common/MyTextField";
import MyButton from "../../components/common/MyButton";
import logo from "../../assets/images/4.png";

const Home = (props) => {
  const { classes } = props;
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [weekData, setWeekData] = useState([]);
  const [hourlyData, setHourlyData] = useState([]);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [searchedByCoord, setSearchedByCoord] = useState(false);
  const [searchedByCity, setSearchedByCity] = useState(false);
  const [cityName, setCityName] = useState("Colombo");

  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  let city = "Colombo";

  // const API_KEY = "155d14750b829fceff58490212e52810";
  // const API_KEY = "1d57f2699953fb749a9842fea1cd00bd";
  const API_KEY = "74ba5397116ed1285fd2f90f07ce0132";

  useEffect(() => {
    if (searchedByCoord) {
      searchDataByLongAndLat();
    } else if (searchedByCity) {
      searchDataByCity();
      setSearchedByCoord(true);
    } else {
      // Default location (Colombo) ? Galle
      setLatitude("6.9271"); // 6.0329 / 54.5260
      setLongitude("79.8612"); // 80.2168 / 105.2551

      setSearchedByCoord(true);
    }
  }, [searchedByCoord, searchedByCity, latitude, longitude, cityName]);

  // Today's Weather Forecast
  useEffect(() => {
    console.log(cityName);
    fetchTodayWeather();
  }, [cityName]);

  // Weather Forecast 3 Days
  useEffect(() => {
    fetchForecastDataForNextThreeDays();
  }, [cityName]);

  const searchDataByLongAndLat = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
      );
      console.log(response.data.name);
      setCityName(response.data.name);
      city = response.data.name;
    } catch (error) {
      console.error(error);
    }
  };

  const searchDataByCity = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );

      setLongitude(response.data.coord.lon);
      setLatitude(response.data.coord.lat);
      setCityName(response.data.name);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTodayWeather = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchForecastDataForNextThreeDays = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${API_KEY}`
      );
      const today = new Date().toISOString().split("T")[0]; // Get today's date

      const forecasts = response.data.list.reduce((acc, item) => {
        const dateTime = item.dt_txt.split(" ");
        const date = dateTime[0];
        const time = dateTime[1];

        // Check if the current forecast is at 06:00:00 and is not today's date
        if (time === "06:00:00" && date !== today) {
          acc.push({
            date: item.dt_txt,
            temp: item.main.temp,
            description: item.weather[0].description,
            icon: item.weather[0].icon,
          });
        }

        return acc;
      }, []);

      // Take only the first three forecasts
      const nextThreeDaysForecasts = forecasts.slice(0, 3);

      setForecastData(nextThreeDaysForecasts);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchByCoordinates = () => {
    console.log("------h-----");
    setSearchedByCoord(true);
    setSearchedByCity(false);
    if (isExpanded) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleSearchByCityName = (cityName) => {
    console.log("------i-----");
    setSearchedByCity(true);
    setSearchedByCoord(false);
    if (isExpanded) {
      setIsExpanded(!isExpanded);
    }
    setCityName(cityName);
    fetchTodayWeather();
  };

  const clearFields = () => {
    setCityName("");
    setLongitude("");
    setLatitude("");
  };

  // This Week's Weather Forecast
  const handleViewMore = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${API_KEY}`
      );

      const forecasts = response.data.list
        .filter((item) => {
          // Extract the time from the timestamp
          const time = item.dt_txt.split(" ")[1];

          // Check if the time is 06:00:00
          return time === "06:00:00";
        })
        .map((item) => ({
          date: item.dt_txt,
          temp: item.main.temp,
          description: item.weather[0].description,
          icon: item.weather[0].icon,
        }));
      setWeekData(forecasts);
      setIsExpanded(!isExpanded);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classes.container_1}>
      <div className={classes.container_2}>
        <div className={classes.container_3}>
          <div className={classes.title_container}>
            {/* <h1>Weatherly</h1> */}
            <div
              className={classes.logo_container}
              style={{
                backgroundImage: `url(${logo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
          <div className={classes.main_search_container}>
            <div className={classes.search_container_1}>
              <SearchBar onSearch={handleSearchByCityName} city={cityName} />
            </div>
            <div className={classes.search_container_2}>
              <div className={classes.search_container_2_0}>
                <div className={classes.latitude_container}>
                  <div className={classes.lbl_latitude}>
                    <label htmlFor="latitude" style={{ fontSize: "20px" }}>
                      Latitude:{" "}
                    </label>
                  </div>
                  <MyTextField
                    variant="outlined"
                    type="text"
                    id="latitude"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    style={{ width: "78%" }}
                  />
                </div>
                <div className={classes.longitude_container}>
                  <div className={classes.lbl_longitude}>
                    <label htmlFor="longitude" style={{ fontSize: "20px" }}>
                      Longitude:{" "}
                    </label>
                  </div>
                  <MyTextField
                    variant="outlined"
                    type="text"
                    id="longitude"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    style={{ width: "78%" }}
                  />
                </div>
                <MyButton
                  label="Search"
                  variant="contained"
                  onClick={handleSearchByCoordinates}
                  style={{
                    textTransform: "none",
                    background: "rgba(243, 132, 132, 0.78)",
                    borderRadius: "8px",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(14px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* {weatherData && <WeatherToday weatherData={weatherData} />}
        {forecastData.length > 0 && (
          <WeatherForecast forecastData={forecastData} />
        )} */}
        <div className={classes.main_container_forecast}>
          {weatherData && (
            <div className={classes.main_container_today}>
              <WeatherToday weatherData={weatherData} />
            </div>
          )}
          {forecastData.length > 0 && (
            <div className={classes.main_container_next_days}>
              <WeatherForecast forecastData={forecastData} />
            </div>
          )}
        </div>

        {weekData.length > 0 && isExpanded && (
          <div className={classes.main_container_week}>
            <WeatherWeek weekData={weekData} />
          </div>
        )}

        <div className={classes.btn_view_more}>
          <MyButton
            label={isExpanded ? "View Less" : "View More"}
            variant="contained"
            onClick={handleViewMore}
            style={{
              textTransform: "none",
              padding: "10px",
              background: "rgba(1, 95, 126, 0.7)",
              borderRadius: "5px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              margin: "20px 0px",
              // "&:hover": {
              //   cursor: "pointer",
              //   background: "#fff !important",
              // },
              // border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

// export default Home;
export default withStyles(styleSheet)(Home);
