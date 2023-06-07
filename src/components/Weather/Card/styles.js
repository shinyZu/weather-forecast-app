export const styleSheet = {
  card_container: {
    // border: "2px solid red",
    background: "rgba(155, 201, 250, 0.24)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(9.8px)",
    WebkitBackdropFilter: "blur(9.8px)",
    // border: "1px solid rgba(155, 201, 250, 0.3)",
    padding: "0px 20px",
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "rgba(40, 74, 110, 0.24) !important",
      margin: "0px 5px",
      border: "1px solid rgba(155, 201, 250, 0.3)",
    },
  },

  txt_week_day: {
    fontSize: "25px",
    marginBottom: "0px",
    // color: "#0a2c40c9",
  },

  txt_date_str: {
    marginTop: "0px",
    marginBottom: "5px",
  },

  txt_time: {
    margin: "0px",
  },

  txt_temp: {
    // border: "1px solid red",
    textAlign: "center",
    fontSize: "50px",
    margin: "0px",
  },

  description: {
    // border: "1px solid red",
    textAlign: "center",
    fontSize: "20px",
    margin: "0px",
  },

  txt_city: {
    fontSize: "40px",
  },

  txt_date: {
    fontSize: "20px",
  },

  icon_container: {
    // border: "1px solid red",
    display: "flex",
    justifyContent: "right",
  },
};
