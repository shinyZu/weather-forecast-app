import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
import MyTextField from "../common/MyTextField";
import MyButton from "../common/MyButton";
import { styleSheet } from "./styles";
import { withStyles } from "@mui/styles";

const SearchBar = (props) => {
  const { classes, onSearch, city } = props;
  const [cityName, setCityName] = useState("Colombo");

  const handleInputChange = (event) => {
    // console.log(event);
    setCityName(event.target.value);
  };

  const handleSearch = () => {
    // onSearch(cityName);
    onSearch(city);
  };

  return (
    <div className={classes.container_1}>
      {/* <input
        type="text"
        placeholder="Enter city name"
        value={cityName}
        onChange={handleInputChange}
      /> */}
      {/* <button onClick={handleSearch}>Search</button> */}

      <label style={{ fontSize: "30px", marginRight: "15px" }}>{city}</label>

      {/* <MyTextField
        variant="outlined"
        type="text"
        placeholder="Enter city name"
        // placeholder={city}
        // value={cityName == "" ? "Colombo" : cityName}
        value={cityName}
        onChange={handleInputChange}
        style={{
          width: "80%",
          marginRight: "10px",
          fontWeight: "bold",
        }}
        InputProps={{
          style: { color: "white" },
        }}
        disabled={true}
      /> */}

      {/* ----------------------------- */}

      {/* <MyButton
        label="Search"
        variant="contained"
        onClick={handleSearch}
        style={{
          textTransform: "none",
          // background: "rgba(84, 160, 255, 0.4)",
          background: "rgba(243, 132, 132, 0.78)",
          borderRadius: "8px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      /> */}
    </div>
  );
};

// export default SearchBar;
export default withStyles(styleSheet)(SearchBar);
