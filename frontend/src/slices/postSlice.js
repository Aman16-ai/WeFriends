import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { uploadPost } from "../services/postService";

export const uploadPostThunk = createAsyncThunk("post/post",async(formData,thunkAPI)=> {
    try {
        const result = await uploadPost(formData)
        if(result.success === true) {
            return result
        }
        thunkAPI.rejectWithValue()
    }
    catch(err) {
        thunkAPI.rejectWithValue()
    }
})


const initialState = {
    formData : "",
    result : ""
}

export const postSlice = createSlice({
    initialState : initialState,
    name :"post",
    reducers : {
        setFormData : (state,action) => {
            state.formData = {...state.formData,[action.payload.name]:action.payload.value}
        }
    },
    extraReducers : {
        [uploadPostThunk.fulfilled] : (state,action) => {
            state.result = action.payload.post
        },
        [uploadPostThunk.rejected] : (state,action)=> {
            state.result = null
        }
    }
})

export const {setFormData} = postSlice.actions
export default postSlice.reducer