import React,{ useContext, useState, useEffect} from 'react';
import  {TaskLiskContext} from '../context/TaskListContext';

const TaskForm = () => {

      const { addTask, clearTask,editItem,editTask } = useContext(TaskLiskContext);

      const[title,setTitle] = useState('');

      const handleChange =(e)=>{
         setTitle(e.target.value);
         }

      const handelSubmit =(e)=>{
        e.preventDefault();
         if(editItem === null){
            addTask(title);
            setTitle('');
         } else {
             editTask(title,editItem.id)
         }
       }

      useEffect(()=>{
          if(editItem !== null){
              setTitle(editItem.title)
          }else {
              setTitle("")
          }
      },[editItem])

    return (
        <form className="form" onSubmit={handelSubmit}>
            <input type="text"
             className="task-input"
             placeholder="Enter Task..."
             value={ title}
             onChange={handleChange}
             required />

             <div className="buttons">
                 <button type="submit" className="btn add-task-btn">{ editItem ? 'Edit Task' : 'Enter Task'}</button>
                 <button onClick={clearTask} className="btn clear-btn">Clear Task</button>

             </div>
            
        </form>
    )
}

export default TaskForm
