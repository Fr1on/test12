import {configureStore} from "@reduxjs/toolkit";
import loginReducer from './authSlice'
import userReducer from './postSlice'

export const store = configureStore({
    reducer: {
        login: loginReducer,
        user: userReducer,
    }
})