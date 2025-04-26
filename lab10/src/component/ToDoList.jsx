import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo , toggleTodo} from './redux/todoSlice'

function ToDoList() {
    const [input, setInput] = useState('')
    const todos = useSelector((state) =>state.todo)
    const dispatch = useDispatch()

    const handleAdd = ()=>{
        if(input.trim()){
            dispatch(addTodo(input));
            setInput('')
        }
      
    }

  return (
    <div>
        <h1 style={{backgroundColor:"yellow"}}>TO DO LIST</h1>
        <label htmlFor="">Nhập công việc: </label>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
        <button onClick={()=>handleAdd()}>Thêm</button>

        <ul style={{listStyle: "none"}}>
            {
                todos.map(todo=>{
                    return <li key={todo.id}>
                                 <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => dispatch(toggleTodo(todo.id))}
                                    style={{ marginRight: '10px' }}
                                />
                                {todo.text} 
                                <button onClick={()=>dispatch(removeTodo(todo.id))} style={{backgroundColor:'red', margin: '10px 10px'}}>Xóa</button>
                            </li>
                })
            }
        </ul>
    </div>
  )
}

export default ToDoList
