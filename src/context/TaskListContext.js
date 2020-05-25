import React ,{ createContext, useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TaskLiskContext = createContext();

const TaskLiskContextProvider =(props)=>{
   
    const initialState =JSON.parse(localStorage.getItem('tasks'))||[];

  const[tasks, setTasks] = useState(initialState);
 
     const[editItem,setEditItem]= useState(null);

     useEffect(()=>{
       localStorage.setItem('tasks', JSON.stringify(tasks));
     },[tasks]);


    const addTask =(title)=>{
      setTasks([...tasks, { title:title, id: uuidv4()}])
    }

    const removeTask = (id) =>{
      setTasks(tasks.filter(task => task.id !== id))
    }

    const clearTask = () =>{
      setTasks([]);
    }

    const findItem =(id)=>{
      const item = tasks.find(task=>task.id === id)
      setEditItem(item);
    }

     const editTask =(title,id)=>{
       const newTasks = tasks.map(task=>(task.id === id ? {title,id}: task))
       setTasks(newTasks);
       setEditItem(null)
     }


    return(
        <TaskLiskContext.Provider value={{tasks,addTask, removeTask, clearTask,findItem,editTask,editItem}}>
          {props.children}
        </TaskLiskContext.Provider>
    )
}

export default TaskLiskContextProvider;