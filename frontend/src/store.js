import {configureStore} from "@reduxjs/toolkit"
import loginReducer from "./slices/loginSlice"
import regsiterReducer from "./slices/registerSlice"
import userReducer from "./slices/userslice"
import postReducer from "./slices/postSlice"
export const store = configureStore({
    reducer:{
        login:loginReducer,
        register : regsiterReducer,
        user : userReducer,
        post : postReducer
    },
})