import axios from 'axios'
import { setUser } from '../reducers/authReducer'


export const registration = async (email, password) => {
    try {
        const response = await axios.post("http://localhost:5050/api/auth/registration", {
            email,
            password
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }

}

export const login = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("http://localhost:5050/api/auth/login", {
                email,
                password
            })
            dispatch(setUser(response.data.user))
        } catch (e) {
            alert(e)
        }
    }
    
}
