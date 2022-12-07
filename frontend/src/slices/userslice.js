import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserProfile } from "../services/userService";
export const userThunk = createAsyncThunk("user/user",async (thunkAPI)=> {
    const result = await getUserProfile()
    console.log(result)
    return result
})

const initialState = {
    user : {}
}

export const userSlice = createSlice({
    initialState : initialState,
    name:"user",
    extraReducers : {
        [userThunk.fulfilled] : (state,action) => {
            state.user = action.payload
        }
    }
})

export default userSlice.reducer