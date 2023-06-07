import background from "../../assets/images/6.jpg";
export const styleSheet = {
  container_1: {
    // border: "2px solid red",
    backgroundColor: "#2c3e50",
    color: "#fff",
    backgroundImage:
      // 'url("https://www.slobodenpecat.mk/wp-content/uploads/2020/03/makedonija-vo-oblaci-sonce-i-veter-184631.jpg")',
      // 'url("https://i0.wp.com/www.ldsdaily.com/wp-content/uploads/2018/08/FHE-Lesson-on-Heaven-Where-Do-We-Go-When-We-Die.jpg?resize=660%2C330&ssl=1")',
      // 'url("https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      // 'url("https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      // 'url("https://images.pexels.com/photos/681391/pexels-photo-681391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
  },

  container_2: {
    // border: "2px solid green",
    // maxWidth: "1080px",
    minWidth: "1040px",
  },

  container_3: {
    // border: "2px solid pink",
    background: "rgba(255, 255, 255, 0.125)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    // border: "1px solid rgba(255, 255, 255, 0.3)",
    display: "flex",
  },

  title_container: {
    // border: "2px solid black",
    marginLeft: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  logo_container: {
    width: "50px",
    height: "50px",
    borderRadius: "50px",
  },

  main_search_container: {
    // border: "2px solid blue",
    width: "100%",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
  },

  search_container_1: {
    // border: "2px solid red",
    width: "40%",
    padding: "5px",
  },

  search_container_2: {
    // border: "2px solid yellow",
    width: "55%",
    padding: "5px",
  },

  search_container_2_0: {
    // border: "2px solid black",
    display: "flex",
    justifyContent: "space-between",
  },

  latitude_container: {
    // border: "2px solid red",
    display: "flex",
    width: "40%",
  },

  lbl_latitude: {
    // border: "2px solid orange",
    marginRight: "15px",
    display: "flex",
    alignItems: "center",
  },

  longitude_container: {
    // border: "2px solid red",
    display: "flex",
    width: "40%",
  },

  lbl_longitude: {
    // border: "2px solid orange",
    marginRight: "15px",
    display: "flex",
    alignItems: "center",
  },

  main_container_forecast: {
    // border: "2px solid blue",
    marginTop: "50px",
    display: "flex",
    justifyContent: "space-between",
  },

  main_container_today: {
    // border: "2px solid pink",
    width: "40%",
  },

  main_container_next_days: {
    // border: "2px solid yellow",
    display: "flex",
    justifyContent: "space-between",
    width: "58%",
  },

  main_container_week: {
    // border: "2px solid orange",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },

  btn_view_more: {
    // border: "2px solid black",
    display: "flex",
    justifyContent: "center",
    margin: "20px 0px",
    // "&:hover": {
    //   cursor: "pointer",
    //   backgroundColor: "#34495e !important",
    // },
  },
};
