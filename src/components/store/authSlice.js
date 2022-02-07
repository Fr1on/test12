import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const postUser = createAsyncThunk(
    'login/postUser',
    async ({email, password}, {rejectWithValue,dispatch}) => {
        console.table(email, password)
        const response =
            await
            axios
                .post('https://api.englishpatient.org/login',
                    {
                        email: email,
                        password: password
                    }
                )
                .then(response => {
                    localStorage.setItem('token', response.data.token);

                })
                .catch(error => {
                    console.log('hhh')
                })
    }
);

const initialLogin = {
    isSuccess: false
}
console.log()
export const loginSlice = createSlice({
    name: "login",
    initialState: {initialLogin},
    reducers: {},
    extraReducers: {
        [postUser.fulfilled]: (state) => {
            state.isSuccess = true
            console.log('dasd')

            return state;
        },
        [postUser.pending]: (state) => {
            state.isSuccess = false
            return state;
        },
        [postUser.rejected]: (state) => {
            state.isSuccess = false

            console.log('dя еблдан')
            return state;
        },


    }

})

export const {setEmail,setPassword} = loginSlice.actions

export default loginSlice.reducer