import actionTypes from "../actions/actionType";
let intiState = {
    isLoggedIn: false,
    token: null,
}
const authReducer = (state = intiState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: action.data
            }
        case actionTypes.REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                token: null,
                msg: action.data
            }
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: action.data
            }
        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                token: null,
                msg: action.data
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                token: null,
            }
        default: 
            return state;
    }
}

export default authReducer