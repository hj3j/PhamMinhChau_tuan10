import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {caculatorBMI, reset} from './redux/BMISlice'

function BMI() {

    const {bmi}  = useSelector((state)=>state.BMI)
    const dispatch = useDispatch()
    const [weightInput, setWeightInput] = useState(0)
    const [heightInput, setHeightInput] = useState(0)

    const handleCaculator = () => {
        dispatch(caculatorBMI({
            weightInput: Number(weightInput), 
            heightInput: Number(heightInput)
        }
        ))
    }   

    const handleReset  = () => {
        setHeightInput(0)
        setWeightInput(0)
        dispatch(reset())
    }

  return (
    <div className='BMI'>
        <h1 style={{backgroundColor:"yellow"}}>BMI</h1>
        <div>
            <label>Cân nặng (kg):</label>
            <input type="text" value={weightInput} onChange={(e)=>setWeightInput(e.target.value)} />
        </div>

        <div>
            <label>Chiều cao (m):</label>
            <input type="text" value={heightInput} onChange={(e)=>setHeightInput(e.target.value)}  />
        </div>
       
       <div>
            <label>  Kết quả: <span>{bmi.toFixed(2)} </span></label>
       </div>

        <div>
             <button onClick={()=>handleCaculator()}>Tính toán</button>
             <button className='reset' onClick={()=>handleReset()}>Reset</button>
        </div>
        
       
      
    </div>
  )
}

export default BMI
