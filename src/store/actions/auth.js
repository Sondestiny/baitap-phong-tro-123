import actionTypes from './actionType'
import { apiLogin, apiRegister } from "../../services/auth"
export const register = (payload) => {
    return async (dispatch) => {
        try {
            const response = await apiRegister(payload)
            if (response?.data.err === 0 ) {
                dispatch({
                    type: actionTypes.REGISTER_SUCCESS,
                    data: response.data.token
                })
            } else {
                dispatch({
                    type: actionTypes.REGISTER_FAIL,
                    data: response.data.msg
                })
            }
        } catch (error) {
            dispatch({
                type: actionTypes.REGISTER_FAIL,
                data: error
            })
        }
    }
}
export const login = (payload) => {
    return async (dispatch) => {
        try {
            const response = await apiLogin(payload)
            if (response?.data.err === 0 ) {
                dispatch({
                    type: actionTypes.LOGIN_SUCCESS,
                    data: response.data.token
                })
            } else {
                dispatch({
                    type: actionTypes.LOGIN_FAIL,
                    data: response.data.msg
                })
            }
        } catch (error) {
            dispatch({
                type: actionTypes.LOGIN_FAIL,
                data: error
            })
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: actionTypes.LOGOUT,
            })
            
        } catch (error) {
            console.log(error)
        }
    }
}