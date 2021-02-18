//Dependables
import React from 'react';
import PropTypes from 'prop-types'

//Main component || // React fucntion based component 1
const AddTask = ({ addTask, tasks }) => {
    const [text, setText] = React.useState('')
    const [day, setDay] = React.useState('')
    const [time, setTime] = React.useState('')
    const [daytime, setDayTime] = React.useState('')
    const [reminder, setReminder] = React.useState(false)

    const showDT = (e) => {
        e.preventDefault()
        let task = {
            id: (tasks.length +1),
            text: text,
            day: daytime,
            reminder: reminder
        }    
        //Send new task as function props to main app  
        addTask(task);

        //Empty the fields
        setDay('');
        setTime('');
        setText('');
        setReminder(true);
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