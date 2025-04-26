
import { createSlice } from "@reduxjs/toolkit";
// State là danh sách các công việc (todos)
// Action: addTodo, toggleTodo, removeTodo
// Hiển thị danh sách và thêm/xoá công việc

const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers:{
        addTodo: (state, action) => {
            state.push({
                id: Date.now(),
                text: action.payload,
                completed: false
                
            })
        },
        toggleTodo : (state, action) => {
            const todo = state.find(todo => todo.id === action.payload);
            if (todo) {
              todo.completed = !todo.completed;
            }
        },
        removeTodo: (state, action) => {
            const index = state.findIndex(todo=> todo.id === action.payload)
            if (index != -1){
                state.splice(index, 1)
            }
        }
    }
})

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;