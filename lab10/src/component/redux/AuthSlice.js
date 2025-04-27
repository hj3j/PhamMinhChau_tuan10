import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";


const initialState = {
    user: '',
    isLoggedIn: false
}

const AuthSlice  = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true
           
        },
        logout : (state,action) => {
            state.isLoggedIn = false
         },
        setUserInfo: (state, action)=> {
            state.user = action.payload 
        }
    }

})

export const {login, logout , setUserInfo} = AuthSlice.actions
export default AuthSlice.reducer