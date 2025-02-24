import actionTypes from "../actions/actionType";
let intiState = {
    Price: [],
    Area: []
}
const appReducer = (state = intiState, action) => {
    switch (action.type) {
        case actionTypes.GET_APP_DATA:
            return {
                ...state,
                Price: action.data.priceData,
                Area: action.data.areaData
            }
        default: 
            return state;
    }
}

export default appReducer