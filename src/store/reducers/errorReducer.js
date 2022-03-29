const { GET_ERROR } = require("../actions/actions");

const initialState = {
  currentError: [],
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERROR:
      return {
        ...state,
        currentError: action.payload,
      };

    default:
      return state;
  }
};

export const setError = (error) => ({ type: GET_ERROR, payload: error });
