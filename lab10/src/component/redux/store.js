import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todoReducer from "./todoSlice"
import themeReducer from "./themeSlice"

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        todo: todoReducer,
        theme: themeReducer
    }
})