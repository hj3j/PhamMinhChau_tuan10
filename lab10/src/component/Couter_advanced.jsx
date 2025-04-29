import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {incrementByAmount, reset} from './redux/Counter_Advanced_Slice'

function Couter_advanced() {

    const count = useSelector((state)=>state.counter_advanced)
    const dispatch = useDispatch()
    const [step, setStep] = useState(0)

    const handleReset = () => {
        dispatch(reset())
        setStep(0)
    }


  return (
    <div className='counter_Advanced'>
        <h1 style={{backgroundColor:"yellow"}}>ĐẾM NÂNG CAO</h1>
        <h2>Kết quả: <span>{count}</span> </h2>
        <h3>Nhập số bước:</h3>
        <input type="text"  placeholder='Nhập số bước....' value={step} onChange={(e)=>setStep(e.target.value)}/>
        <button className='increase' onClick={()=>dispatch(incrementByAmount(step))}>Tăng</button>
        <button className='reset' onClick={()=>handleReset()}>Reset</button>
    </div>
  )
}

export default Couter_advanced
