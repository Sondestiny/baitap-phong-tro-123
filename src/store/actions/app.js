import actionTypes from './actionType'
import { apiGetAppData} from "../../services/app"
export const GetAppData = () => {
    return async (dispatch) => {
        try {
            let response = await apiGetAppData()
            if (response?.data.err === 0 ) {
                dispatch({
                    type: actionTypes.GET_APP_DATA,
                    data: response.data.response
                })
            } else {
                dispatch({
                    type: actionTypes.GET_APP_DATA,
                    data: null
                })
            }
        } catch (error) {
            dispatch({
                type: actionTypes.GET_APP_DATA,
                data: error
            })
        }
    }
}