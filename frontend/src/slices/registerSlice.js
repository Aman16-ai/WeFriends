import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerUserService } from "../services/userService";

export const registerThunk = createAsyncThunk('register/register',async(credentials,thunkAPI)=> {
    const result = registerUserService(credentials)
    if(result.success) {
        return result
    }
    return thunkAPI.rejectWithValue();
})

const initialState = {
    credentials : {
        image : "",
        firstname: "",
        lastname : "",
        username : "",
        email : "",
        password : "",
    },
    token : ""
}

export const registerSlice = createSlice({
    name:"register",
    initialState : initialState,
    reducers : {
        setCredentials : (state,action) => {
            state.credentials = {...state.credentials,[action.payload.name] : action.payload.value}
        }
    },
    extraReducers : {
        [registerThunk.fulfilled] : (state,action) => {
            state.token = action.payload.authtoken
        },
        [registerThunk.rejected] : (state,action) => {
            state.token  = null;
        }
    }
})

export const {setCredentials} = registerSlice.actions
export default registerSlice.reducer
