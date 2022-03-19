import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import Home from "../Home/Home";

const ProtectedRoute = () => {
  const auth = useSelector((store) => store.authenticated.authenticated);

  return auth ? <Home></Home> : <Navigate to="/login" />;
};

export default ProtectedRoute;
