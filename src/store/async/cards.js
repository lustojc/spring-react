import axios from 'axios'
import { getCards } from '../reducers/cardReducer'

export const fetchCards = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:5050/api/auth/cards")
            dispatch(getCards(response.data))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
    
}

fetchCards()