import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createSlice } from '@reduxjs/toolkit'
import Couter from './component/Couter'
import ToDoList from './component/ToDoList'
import ThemeToggle from './component/ThemeToggle'
import Cart from './component/Cart'
import Auth from './component/Auth'
import Async_Thunk from './component/Async_Thunk'
import Couter_advanced from './component/Couter_advanced'

function App() {

  // 1. Cài đặt Redux Toolkit
  // npm install @reduxjs/toolkit react-redux

  
  return (
    <>
      <div>
        {/* <Couter/><br /> */}
        {/* <ToDoList/> */}
        {/* <ThemeToggle/> */}
        {/* <Cart/> */}
        {/* <Auth/> */}
        {/* <Async_Thunk/> */}
        <Couter_advanced/>
      </div>
      
    </>
  )
}

export default App
