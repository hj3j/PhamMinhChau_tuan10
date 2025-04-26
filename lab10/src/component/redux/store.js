import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todoReducer from "./todoSlice"
import themeReducer from "./themeSlice"
import cartReducer from "./CartSlice"

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        todo: todoReducer,
        theme: themeReducer,
        cart: cartReducer
    }
})