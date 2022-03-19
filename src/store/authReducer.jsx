import { LOGIN_USER } from "./actions";

const initialState = {
  authenticated: false,
  login: "Admin",
  pass: "1234",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        authenticated: true,
        login: action.payload,
        pass: action.payload,
      };
    default:
      return state;
  }
};
