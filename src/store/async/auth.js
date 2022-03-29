import axios from "axios";
import { setUser } from "../reducers/authReducer";
import { setError } from "../reducers/errorReducer";

export const registration = (
  email,
  password,
  repeatPassword,
  firstName,
  lastName,
  age
) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:5050/api/auth/registration",
        {
          email,
          password,
          repeatPassword,
          firstName,
          lastName,
          age,
        }
      );
      alert(response.data.message);
    } catch (e) {
      dispatch(setError(e.response.data.message));
    }
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:5050/api/auth/login",
        {
          email,
          password,
        }
      );
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      alert(e.response.data.message);
    }
  };
};

export const auth = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:5050/api/auth/auth`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      localStorage.removeItem("token");
      alert(e.response.data.message);
    }
  };
};
