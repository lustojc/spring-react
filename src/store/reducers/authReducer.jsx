import { SET_USER } from "../actions/actions";
import { LOGOUT } from "../actions/actions";

const initialState = {
  currentUser: {},
  isAuth: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isAuth: true,
        currentUser: action.payload,
        
      };
    case LOGOUT:
      return {
        ...state,
        currentUser: {},
        isAuth: false,
      }
    default:
      return state;
  }
};

export const setUser = (user) => ({type: SET_USER, payload: user});
export const logout = () => ({type: LOGOUT})