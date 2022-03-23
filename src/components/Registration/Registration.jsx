import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { registration } from "../../store/async/auth";
import Input from "../common/Input/Input";
import "../Login/Login.css"

const Registration = () => {
  const isAuth = useSelector(state => state.user.isAuth)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  return (
    <div className="App">
    <h1>
      Welcome back, <span>dear friend!</span>
    </h1>
    <div className="login-form">
      <h4 className="form-title">Регистрация</h4>
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
          placeholder="Придумайте пароль"
          value={password}
          setValue={setPassword}
        />
      </div>
      <div className="login-nav__btn">
      <button 
       className="login-btn"
       onClick={()=> registration(email, password)}
       >
        Зарегистрироваться
      </button>
      {!isAuth && <div ><NavLink to="/login">Уже есть аккаунт!</NavLink></div>}
      </div>
    </div>
  </div>
  );
};

export default Registration;