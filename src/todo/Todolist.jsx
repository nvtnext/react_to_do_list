import React, { useState } from 'react'
import ss from "./todolist.module.css"
const Todolist = () => {
    const [task, setTask] = useState([])
    const [currentTask, setCurrentTask] = useState('')

  let handleAddTask=()=>{
        if (currentTask){
            setTask([...task, currentTask])
            setCurrentTask('')
        }
    }
    let handleDeleteTask=(index)=>{
        const newTask = [...task]
        newTask.splice(index, 1)
        setTask(newTask)
    }

  return (
    <div id={ss.tb}>
        <h1>To-Do List</h1>
        <input type="text" placeholder='enter task' value={currentTask} onChange={(e)=>setCurrentTask(e.target.value)} />
        <button onClick={handleAddTask}>Add</button>
        <ul>
           {task.map((task, index)=>(
            <li key={index}>
                {task}
                <button onClick={()=>handleDeleteTask(index)}>Del</button>

            </li>
           ))}
        </ul>
    </div>
  )
}

export default Todolist