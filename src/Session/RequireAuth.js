import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import LoginForm from "../components/Login/LoginForm";
import { useAuth } from "./Auth";

function RequireAuth({ children }) {
  //   console.log(children);
  const auth = useAuth();
  const location = useLocation();
  console.log(auth);
  console.log(location);

  // useEffect(() => {
  //   console.log("qqqqqqqqqqqqqqqqqq");
  // }, []);

  if (auth.user.username == null) {
    console.log("User still not login... cannot access profile");
    // return <Navigate to="/testLogin" state={{ path: location.pathname }} />;
    return <LoginForm to="/" state={{ path: location.pathname }} />;
  }
  return children;
}

export default RequireAuth;
