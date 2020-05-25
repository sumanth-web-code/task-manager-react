import React, { useContext} from 'react';
import Task from './Task';
import { TaskLiskContext  } from '../context/TaskListContext';

const TaskList = () => {
      const { tasks} = useContext(TaskLiskContext );
    return ( 
        <div>
          {tasks.length ? (
               <ul className="list">
               {
                   tasks.map(task=>{
                       return<Task task={task} key={task.id}/>
               })
               }
             </ul>
          ): (
            <div className="no-tasks">No Tasks</div>
          )}
         

        </div>
     );
}
 
export default TaskList;