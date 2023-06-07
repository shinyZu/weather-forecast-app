import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { styleSheet } from "./styles";
import { withStyles } from "@mui/styles";

const LoginForm = (props) => {
  const { classes, onLogin } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("LoginForm.js : " + username + " " + password);
    onLogin(username, password);
  };

  return (
    // <div className={styles.login_container}>
    <div className={classes.login_container}>
      <div className={styles.glass_container}>
        <h1 className={classes.login_text}>
          Forecast Portal: Step into the Weather Wonderland!
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className={classes.login_text}>Username:</label>
            <input
              id="f_login"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={classes.login_text}
            />
          </div>
          <br />
          <div>
            <label className={classes.login_text}>Password:</label>
            <input
              id="f_pwd"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={classes.login_text}
            />
          </div>
          <br />
          <button className={classes.btn_login} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

// export default LoginForm;
export default withStyles(styleSheet)(LoginForm);

// import React, { useState } from "react";
// import styles from "./LoginForm.module.css";
// import { styleSheet } from "./styles";
// import { withStyles } from "@mui/styles";

// const LoginPage = (props, { onLogin }) => {
//   const { classes } = props;
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleLogin = (event) => {
//     event.preventDefault();
//     // Perform login logic and validation here
//     if (username && password) {
//       onLogin(username);
//     }
//   };

//   return (
//     <div className={styles.login_container}>
//       {/* <div className={classes.login_container}> */}
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={handleUsernameChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// // export default LoginPage;
// export default withStyles(styleSheet)(LoginPage);
