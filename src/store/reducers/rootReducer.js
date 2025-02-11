import authReducer from "./authReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";
import {persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const commonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2,
}

const authPersistConfig = {
    ...commonConfig,
    key: 'auth',
    whitelist: ['isLoggedIn', 'token']
  };
const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    user: userReducer, 
})
export default rootReducer;