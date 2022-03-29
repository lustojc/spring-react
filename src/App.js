import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { auth } from "./store/async/auth";
import Registration from "./components/Registration/Registration";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
function App() {
  const isAuth = useSelector((state) => state.user.isAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
    localStorage.removeItem("token");
  }, []);

  return (
    <>
      <Routes>
        {!isAuth ? (
          <>
            <Route path="registration" element={<Registration />} />
            <Route path="*" element={<Login />} />
            <Route path="/home" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<ProtectedRoute />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
