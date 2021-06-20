//Dependables
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types'
import {store} from '../store/todoStore'

//Main component || // React fucntion based component 1
const AddTask = () => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [time, setTime] = useState('')
    const [daytime, setDayTime] = useState('')
    const [reminder, setReminder] = useState(false)

    const {state, dispatch} = useContext(store)

    const showDT = (e) => {
        e.preventDefault()
        let task = {
            id: (state.length +1),
            text: text,
            day: daytime,
            reminder: reminder
        }    

        //Empty the fields
        setDay('');
        setTime('');
        setText('');
        setReminder(true);

        dispatch({type: "Add_Todo", data: task})
        
    }

    React.useEffect(() => {
        if (day != '' || time != '') {
            const dateF = new Date(`${day} ${time}`)
            setDayTime(`${dateF.toDateString()} at ${dateF.getHours()}:${dateF.getMinutes()}`)
        }
      }, [time]);

    React.useEffect(() => {
        if (day != '' || time != '') {
            const dateF = new Date(`${day} ${time}`)
            setDayTime(`${dateF.toDateString()} at ${dateF.getHours()}:${dateF.getMinutes()}`)
        }
      }, [day]);
    
    return (
        <form className='add-form'>
            <div className='form-control' >
                <label>Task</label>
                <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Add Task'/>
            </div>
            <div className='form-control' >
                <label>Day</label>
                <input type="date" value={day} onChange={(e) => setDay(e.target.value)} placeholder='Add Day and Time'/>
            </div>
            <div className='form-control' >
                <label>Time</label>
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} placeholder='Add Day and Time'/>
            </div>
            <div className='form-control form-control-check' >
                <label>Set Reminder</label>
                <input type='checkbox' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input className='btn btn-block' type='submit' onClick={(e) => showDT(e)} value='Save Task' />
        </form>
    );
  }

//Export components
export default AddTask