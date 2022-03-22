import { GET_CARDS } from "../actions/actions";
import { cardInfo } from "../../mock-items";

export const cardReducer = (state = cardInfo, action) => {
  switch (action.type) {
    case GET_CARDS:
      return [action.payload, ...state];
    default:
      return state;
  }
};
