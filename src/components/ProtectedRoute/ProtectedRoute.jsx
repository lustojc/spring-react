import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import Home from "../Home/Home";

const ProtectedRoute = () => {
  const auth = useSelector((store) => store.authenticated);

  return auth ? <Home></Home> : <Navigate to="/" />;
};

export default ProtectedRoute;
