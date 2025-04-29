import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todoReducer from "./todoSlice"
import themeReducer from "./themeSlice"
import cartReducer from "./CartSlice"
import authReducer from './AuthSlice'
import asyncThunkReducer from './Async_Thunk_Slice'
import counter_advanced_Reducer from './Counter_Advanced_Slice'
import BMIReducer from './BMISlice'

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        todo: todoReducer,
        theme: themeReducer,
        cart: cartReducer,
        auth: authReducer,
        asyncThunk: asyncThunkReducer,
        counter_advanced: counter_advanced_Reducer,
        BMI: BMIReducer
    }
})