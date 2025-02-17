import actionTypes from './actionType'
import { apiPostGetAll, apiPostGetLimit} from "../../services/post"
export const GetAll = () => {
    return async (dispatch) => {
        try {
            let response = await apiPostGetAll()
            if (response?.data.err === 0 ) {
                dispatch({
                    type: actionTypes.GET_ALL_POST,
                    data: response.data.response
                })
            } else {
                dispatch({
                    type: actionTypes.GET_ALL_POST,
                    data: null
                })
            }
        } catch (error) {
            dispatch({
                type: actionTypes.GET_ALL_POST,
                data: error
            })
        }
    }
}
export const GetLimit = (pageNumber) => {
    return async (dispatch) => {
        try {
            let response = await apiPostGetLimit(pageNumber)
            if (response?.data.err === 0 ) {
                dispatch({
                    type: actionTypes.GET_LIMIT_POST,
                    data: response?.data.response
                })
            } else {
                dispatch({
                    type: actionTypes.GET_LIMIT_POST,
                    data: null
                })
            }
        } catch (error) {
            dispatch({
                type: actionTypes.GET_LIMIT_POST,
                data: error
            })
        }
    }
}
