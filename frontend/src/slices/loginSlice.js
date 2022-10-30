import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUserService } from "../services/userService";

export const loginThunk = createAsyncThunk("login/login",async(credentials,thunkAPI)=> {
    const result = await loginUserService(credentials)
    if(result.success === true) {
        return result;
    }
    return thunkAPI.rejectWithValue();
})

const initialState = {
    credentials : {
        username : "",
        password : "",
    },
    token : ""
}

export const loginSlice = createSlice({
    name : "login",
    initialState : initialState,
    reducers : {
        setCredentials : (state,action) => {
            state.credentials = {...state.credentials,[action.payload.name] : action.payload.value}
        }
    },
    extraReducers : {
        [loginThunk.fulfilled] : (state,action) => {
            state.token = action.payload.authtoken
        },
        [loginThunk.rejected] : (state,action) => {
            state.token = null
        }
    }
    
})

export const {setCredentials} = loginSlice.actions
export default loginSlice.reducer