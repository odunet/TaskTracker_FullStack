//Import dependencies
import React, { useState, useContext, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import "../../stylesheets/style.css"
import {store} from './store/todoStore'


//Main component || // React function based component 1
const App = () => {
    //Set state for add task form
    const [showAdd, setShowAdd] = useState(false)

    //Bring in dispatch
    const {dispatch, state} = useContext(store)

    //get user data || window.onload can be used instead
    useEffect(() => {
      fetch('/api/users')
      .then(response => (response.json()))
      .then(data => {const data_ = JSON.parse(data["external message"])
        dispatch({type: "Load_Todo", data: data_})
      })
    }, []);

    //Main render section
    return (
      <div className="container">
        <Header btnState={showAdd} onAdd={() => setShowAdd(!showAdd)} title="Task Tracker" />
        {showAdd ? <AddTask/> : ''}
        {state.length > 0 ? <Tasks/> : ('No Tasks Here')}
      </div>
    )};

//Export components
export default  App