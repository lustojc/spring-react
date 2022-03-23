import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { login } from "../../store/async/auth";
import Input from "../common/Input/Input";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <h1>
        Welcome back, <span>dear friend!</span>
      </h1>
      <div className="login-form">
        <h4 className="form-title">Вход</h4>
        <div className="form-control">
          <Input
            type="text"
            placeholder="Введите ваш @mail"
            value={email}
            setValue={setEmail}
          />
        </div>
        <div className="form-control">
          <Input
            type="password"
            placeholder="Пароль"
            value={password}
            setValue={setPassword}
          />
        </div>
        <div className="login-nav__btn">
          <button
            className="login-btn"
            onClick={() => dispatch(login(email, password))}
          >
            Войти
          </button>
          {!isAuth && (
            <div>
              <NavLink to="/registration">Регистрация</NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
