import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<ProtectedRoute />}>
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
