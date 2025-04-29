import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    weight: 0,
    height: 0,
    bmi: 0

}

export const BMISlice = createSlice ({
    name: 'BMI',
    initialState,
    reducers : {
        caculatorBMI: (state, action) => {
            const {weightInput, heightInput} = action.payload
            state.weight = weightInput
            state.height = heightInput
            state.bmi = state.weight / (state.height **2)

        },
        reset:() => ({
            weight: 0,
            height: 0,
            bmi: 0
        })
    }

})

export const {caculatorBMI, reset} = BMISlice.actions
export default BMISlice.reducer