//Dependables
import React from 'react';
import PropTypes from 'prop-types'
import Task from './Task'

//Main component || // React fucntion based component 1
const Tasks = ( {tasks, onDelete, doubleClick} ) => {
    return (
      <div>
          {tasks.map((task,i) => 
            <Task key={task.id} doubleClick={doubleClick} task_={task} onDelete={onDelete}/>
          )}              
      </div>
    );
  }

//Export components
export default Tasks