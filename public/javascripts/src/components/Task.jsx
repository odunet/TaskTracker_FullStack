//Dependables
import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'
import React, { useState, useContext } from 'react';
import {store} from '../store/todoStore'

//Main component || // React fucntion based component 1
const Task = ( {task_} ) => {

    const {state, dispatch} = useContext(store)
    const onDelete = (id) => {
     dispatch({type: "Delete_Todo", data: id})
    }
    const doubleClick = (id) => {
     dispatch({type: "Change_Reminder", data: id})
    }

    const switchColor = (event) => {
        if (event.target.parentNode.style.color == "red"){
            event.target.parentNode.style.color = "blue" 
        }
        else{
            event.target.parentNode.style.color = "red" 
        }
    }

    return (
        <div className={`task ${task_.reminder == true ? 'reminder': ''}`} onDoubleClick={(evt) => doubleClick(task_.id, evt)}>
            <h3>{task_.text} <FaTimes onClick={() => onDelete(task_.id)} style={{ color:'red', cursor:'pointer'}}/> 
            </h3>
            <p>{task_.day}</p>
            <input className="chk" onChange={switchColor} type="checkbox" />
        </div>
    );
  }

//Export components
export default Task