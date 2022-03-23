import { Provider, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Registration from "./components/Registration/Registration";

function App() {

  const isAuth = useSelector(state => state.user.isAuth)

  return (
    <>
    {!isAuth ?
    <Routes>
      <Route path='registration' element={<Registration/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
    :
    <Routes>
      <Route path="*" element={<Navigate to="/home" replace />} />
      <Route path='/home' element={<ProtectedRoute/>}/>
    </Routes>
    }
    </>
  );
}

export default App;
