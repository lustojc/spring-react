import axios from "axios";
import { getCards } from "../reducers/cardReducer";

export const fetchCards = () => {
  return async function getMyCards(dispatch) {
    try {
      const response = await axios.get("http://localhost:5050/api/cards");
      dispatch(getCards(response.data));
    } catch (e) {
      alert(e.response.data.message);
    }
  };
};

fetchCards();
