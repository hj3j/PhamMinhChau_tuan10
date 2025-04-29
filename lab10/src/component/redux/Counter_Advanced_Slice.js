import { createSlice } from "@reduxjs/toolkit";

export const Counter_Advanced_Slice = createSlice({
    name: 'counter_advanced',
    initialState: 0,
    reducers: {
        incrementByAmount: (state, action) => state + Number(action.payload),
        reset : () => 0
    }
})


export const {incrementByAmount, reset} = Counter_Advanced_Slice.actions
export default Counter_Advanced_Slice.reducer