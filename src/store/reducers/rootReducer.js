import { combineReducers } from "redux";
import {persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import appReducer from "./appReducer";
import postReducer from "./postReducer";

const commonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2,
}

const authPersistConfig = {
    ...commonConfig,
    key: 'auth',
    whitelist: ['isLoggedIn', 'token']
  };
const PostPersistConfig = {
    ...commonConfig,
    key: 'post'
  };
const AppPersistConfig = {
    ...commonConfig,
    key: 'app'
  };
const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    user: userReducer,
    post: persistReducer(PostPersistConfig, postReducer),
    app: persistReducer(AppPersistConfig, appReducer),
})
export default rootReducer;