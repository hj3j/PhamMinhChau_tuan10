import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment } from './redux/counterSlice'

function Couter() {
    
    const count = useSelector((state) => state.counter)
    const dispatch = useDispatch()


  return (
    <div>
        <h1 style={{backgroundColor:"yellow"}}>COUTER</h1>
        <button onClick={()=>dispatch(increment())}>Tang</button>
        <h1 >{count}</h1>
        <button onClick={()=>dispatch(decrement())}>Giam</button>
    </div>
  )
}

export default Couter
