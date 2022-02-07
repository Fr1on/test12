import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {useEffect} from "react";

const initialState = {
    user: [],
}

export const getUser = createAsyncThunk(
    'user/getUser',
    async (_, {rejectWithValue,dispatch}) => {
        const response = await axios.get('https://api.englishpatient.org/users/me',
            {
                headers: {
                    header: 'Content-Type: application/json',
                    Authorization: `${localStorage.getItem('token')}`,
                },
            },)
            .then(response => {
                dispatch(setUser(response.data))
            })
    }
);

export const postSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
    },
    extraReducers: {
        [getUser.fulfilled]: '',
        [getUser.pending]: '',
        [getUser.rejected]: ''

}
})

export const { setUser} = postSlice.actions

export default postSlice.reducer