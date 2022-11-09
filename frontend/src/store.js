import {configureStore} from "@reduxjs/toolkit"
import loginReducer from "./slices/loginSlice"
import regsiterReducer from "./slices/registerSlice"
export const store = configureStore({
    reducer:{
        login:loginReducer,
        register : regsiterReducer
    },
})