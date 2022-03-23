import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import Home from "../Home/Home";

const ProtectedRoute = () => {

  return <Home/>;
};

export default ProtectedRoute;
