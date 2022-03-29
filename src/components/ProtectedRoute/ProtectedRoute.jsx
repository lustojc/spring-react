import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../store/async/auth";
import Home from "../Home/Home";

const ProtectedRoute = () => {
  return <Home />;
};

export default ProtectedRoute;
