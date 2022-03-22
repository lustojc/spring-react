import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGIN_USER } from "../../store/actions/actions";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const log = useSelector((store) => store.authenticated.login);
  const pass = useSelector((store) => store.authenticated.pass);

  const [inputs, setInputs] = useState({ username: "", password: "" });

  function onChangeLogin(e) {
    setInputs({ ...inputs, username: e.target.value });
  }

  function onChangePassword(e) {
    setInputs({ ...inputs, password: e.target.value });
  }

  function login(event) {
    event.preventDefault();
    if (inputs.username === log && inputs.password === pass) {
      dispatch({ type: LOGIN_USER });
      history("/home");
    }
  }

  return (
    <div className="App">
      <h1>
        Welcome back, <span>dear friend!</span>
      </h1>
      <form onSubmit={login} className="login-form">
        <h4 className="form-title">Login</h4>
        <div className="form-control">
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={onChangeLogin}
          />
        </div>
        <div className="form-control">
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={onChangePassword}
          />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
