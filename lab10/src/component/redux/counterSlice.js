import { createSlice } from "@reduxjs/toolkit"

  // 2. Tạo slice cho counter (chứa reducer và actions)
  const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers :{
      increment: (state) => state + 1,
      decrement: (state) => state -1
    }
  })

  //export action tự động sinh bởi createSlice
  export const {increment, decrement} = counterSlice.actions

  //export reducer để đưa vào store
  export default counterSlice.reducer

