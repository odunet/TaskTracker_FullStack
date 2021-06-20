//Dependables
import React, { useContext } from 'react';
import { store } from '../store/todoStore';
import PropTypes from 'prop-types'
import Task from './Task'

//Main component || // React fucntion based component 1
const Tasks = () => {
    const { state, dispatch } = useContext(store);

    return (
      <div>
          {state.map((task,i) => 
            <Task key={task.id} task_={task}/>
          )}              
      </div>
    );
  }

//Export components
export default Tasks