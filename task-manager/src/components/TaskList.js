import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import Task from './Task';

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      {tasks.length ? (
        <ul className='list'>
          {tasks.map((taskItem) => {
            return <Task task={taskItem} key={taskItem.id} />;
          })}
        </ul>
      ) : (
        <div className='no-tasks'>No Tasks</div>
      )}
    </div>
  );
};

export default TaskList;
