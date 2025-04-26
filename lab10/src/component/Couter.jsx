import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment } from './redux/counterSlice'

function Couter() {
    
    const count = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    console.log('Current count:', count); 

  return (
    <div>
        <button onClick={()=>dispatch(increment())}>Tang</button>
        <h1 >{count}</h1>
        <button onClick={()=>dispatch(decrement())}>Giam</button>
    </div>
  )
}

export default Couter
