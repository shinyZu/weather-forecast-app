import React, { useState } from "react";
import Button from "@mui/material/Button";
import { styleSheet } from "./button_styles";
import { withStyles } from "@mui/styles";

const MyButton = (props) => {
  const { classes } = props;
  return (
    <>
      <Button
        label={props.label}
        variant={props.variant}
        onClick={props.onClick}
        style={props.style}
      >
        {props.label}
      </Button>
    </>
  );
};

// export default MyButton;
export default withStyles(styleSheet)(MyButton);
