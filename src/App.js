import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  useHistory,
  Navigate,
} from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import Home from "./pages/HomePage/Home";
import TestHome from "./pages/HomePage/TestHome";
import { AuthProvider } from "./Session/Auth";
import RequireAuth from "./Session/RequireAuth";
import { useAuth } from "./Session/Auth";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  // const [user, setUser] = useState({
  //   username: null,
  //   password: null,
  // });
  // const auth = useAuth();

  useEffect(() => {
    localStorage.setItem("username", "shiny");
    localStorage.setItem("password", "shiny123");
  }, []);

  const handleLogin = (uname, pwd) => {
    console.log("handleLogin");
    console.log("App.js : " + uname + " " + pwd);
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    if (uname == username && pwd == password) {
      setLoggedIn(true);
    }

    // auth.login({
    //   username: uname,
    //   password: pwd,
    // });
  };

  return (
    <Router>
      {/* <AuthProvider> */}
      <Routes>
        <Route path="/" exact element={<Navigate replace to="/login" />} />
        {/* <Route path="/login" element={<Login onLogin={handleLogin} />} /> */}
        <Route path="/home" element={<Home />} />
        {/* <Route path="/home" element={<TestHome />} /> */}

        <Route
          path="/login"
          element={
            loggedIn ? (
              <Navigate replace to="/home" />
            ) : (
              // <Home />
              <Login onLogin={handleLogin} />
            )
          }
        />

        {/* <Route
          exact
          path="/"
          element={
            loggedIn ? (
              // <RequireAuth>
              <Home replace to="/login" />
            ) : (
              // </RequireAuth>
              <Login onLogin={handleLogin} />
            )
          }
        /> */}

        <Route
          path="/home"
          element={loggedIn ? <Home /> : <Login onLogin={handleLogin} />}
        />
      </Routes>
      {/* </AuthProvider> */}
    </Router>
  );
};

export default App;
