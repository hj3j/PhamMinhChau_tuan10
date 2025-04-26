import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createSlice } from '@reduxjs/toolkit'
import Couter from './component/Couter'
import ToDoList from './component/ToDoList'

function App() {

  // 1. Cài đặt Redux Toolkit
  // npm install @reduxjs/toolkit react-redux

  
  return (
    <>
      <div>
        <Couter/><br />
        <ToDoList/>
      </div>
      
    </>
  )
}

export default App
