import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todoReducer from "./todoSlice"
import themeReducer from "./themeSlice"
import cartReducer from "./CartSlice"
import authReducer from './AuthSlice'
import asyncThunkReducer from './Async_Thunk_Slice'

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        todo: todoReducer,
        theme: themeReducer,
        cart: cartReducer,
        auth: authReducer,
        asyncThunk: asyncThunkReducer
    }
})