import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { registration } from "../../store/async/auth";
import Input from "../common/Input/Input";
import "../Login/Login.css";

const Registration = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const err = useSelector((state) => state.errors.currentError);

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div className="App">
      <h1>
        Welcome back, <span>dear friend!</span>
      </h1>
      <div className="login-form">
        <h4 className="form-title">Регистрация</h4>
        <div className="form-control">
          <div>Логин</div>
          <Input
            type="text"
            placeholder="Введите ваш @mail"
            value={email}
            setValue={setEmail}
          />
          {err == "Uncorrect email" ? (
            <p className="errors-form">{err}</p>
          ) : null}
        </div>
        <div className="form-control">
          <div>Пароль</div>
          <Input
            type="password"
            placeholder="Придумайте пароль"
            value={password}
            setValue={setPassword}
          />
          {err ==
          "Your password should contain at least 1 letter and 1 number" ? (
            <p className="errors-form">{err}</p>
          ) : null}
        </div>
        <div className="form-control">
          <div>Повторите ваш пароль</div>
          <Input
            type="password"
            placeholder="Повторите Ваш пароль"
            value={repeatPassword}
            setValue={setRepeatPassword}
          />
          {err == "Your passwords are not equal" ? (
            <p className="errors-form">{err}</p>
          ) : null}
        </div>
        <div className="form-control">
          <div>Имя</div>
          <Input
            type="text"
            placeholder="Ваше Имя"
            value={firstName}
            setValue={setFirstName}
          />
          {err == "Your name should be more than 3 letters" ? (
            <p className="errors-form">{err}</p>
          ) : null}
        </div>
        <div className="form-control">
          <div>Фамилия</div>
          <Input
            type="text"
            placeholder="Ваша Фамилия"
            value={lastName}
            setValue={setLastName}
          />
          {err == "Your surname should be more than 3 letters" ? (
            <p className="errors-form">{err}</p>
          ) : null}
        </div>

        <div className="form-control">
          <div>Возраст</div>
          <Input
            type="number"
            placeholder="Сколько Вам лет?"
            value={age}
            setValue={setAge}
          />
          {err == "Your must be older than 1 year old" ? (
            <p className="errors-form">{err}</p>
          ) : null}
        </div>
        <div className="login-nav__btn">
          <button
            className="login-btn"
            onClick={() =>
              dispatch(
                registration(
                  email,
                  password,
                  repeatPassword,
                  firstName,
                  lastName,
                  age
                )
              )
            }
          >
            Зарегистрироваться
          </button>
          {!isAuth && (
            <div>
              <NavLink to="/">Уже есть аккаунт!</NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Registration;
