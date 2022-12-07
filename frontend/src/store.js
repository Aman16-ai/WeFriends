import {configureStore} from "@reduxjs/toolkit"
import loginReducer from "./slices/loginSlice"
import regsiterReducer from "./slices/registerSlice"
import userReducer from "./slices/userslice"
export const store = configureStore({
    reducer:{
        login:loginReducer,
        register : regsiterReducer,
        user : userReducer
    },
})