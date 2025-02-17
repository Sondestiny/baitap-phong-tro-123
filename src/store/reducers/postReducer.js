import actionTypes from "../actions/actionType";
let intiState = {
    post: []
}
const postReducer = (state = intiState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_POST:
            return {
                ...state,
                post: action.data
            }
        case actionTypes.GET_LIMIT_POST:
            return {
                ...state,
                post: action.data
            }
        default: 
            return state;
    }
}

export default postReducer