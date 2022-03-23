import { GET_CARDS, GET_USER_CARD } from "../actions/actions";

const initialState = {
  cards: [],
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
      return { ...state, cards: action.payload };
    case GET_USER_CARD:
      return {cards: [action.payload, ...state.cards]}
    default:
      return state;
  }
};

export const getCards = (cards) => ({ type: GET_CARDS, payload: cards });
export const getUserCards = (card) => ({ type: GET_USER_CARD, payload: card});