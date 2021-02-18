//Import dependencies
import React, { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import "../../stylesheets/style.css"

//Main component || // React function based component 1
const App = () => {
    //Fetches data from the Express API on the click of the buton
    const fetch_ = () => {
      fetch('/api/users')
      .then(response => (response.json()))
      .then(data => {const data_ = JSON.parse(data["external message"])

              //Set the task state to the data pulled from the server
                    setTasks(data_)
                    return data_;
    });
    }

      //Set state for add task form
      const [showAdd, setShowAdd] = React.useState(false)

      //Set state with data loaded from server
      const [tasks, setTasks] = React.useState([''])

      //get user data || Use effect can be used instead
      window.onload = () => {
      fetch('/api/users')
      .then(response => (response.json()))
      .then(data => {const data_ = JSON.parse(data["external message"])
        setTasks(data_)
      })
    }

    //Function implements double clicking tast
    const doubleClick = (id, evt) => {
      setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task
      ))
        console.log(id);
  
        //Implement updating of the DB via fetch post here.
          //find task with same ID
          var actual_task = tasks.filter((task) => task.id === id)
          console.log(!actual_task[0].reminder);
        const API_URL = "/api/update"
        fetch(API_URL, {
          method: 'PUT',
          body: JSON.stringify({"id":id,
                                "reminder": !actual_task[0].reminder
        }),
          headers:{
              'content-type': 'application/json',
              'accept': 'application/json plain/text */*'
          }
      }).then(response => response.json())
        .then(createMew => {
          console.log('Completed!');
        });    
    }

    //Delete item from list
    const deleteTask = (id) => {
      //OLD code using JS Object
      setTasks(tasks.filter((task) => task.id != id))

      //Implement updating of the DB via fetch post here.
      const API_URL = "/api/delete"
      fetch(API_URL, {
        method: 'DELETE',
        body: JSON.stringify({"id":id}),
        headers:{
            'content-type': 'application/json',
            'accept': 'application/json plain/text */*'
        }
    }).then(response => response.json())
      .then(createMew => {
          console.log('Completed!');
      });
    }


    //Add item to list
    const addList = (task) => {
      setTasks([...tasks, task])
      //Implement updating of the DB via fetch post here.
      const API_URL = "/api/add"
      fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(task),
        headers:{
            'content-type': 'application/json'
        }
    }).then(response => response.json())
      .then(createMew => {
          console.log('Completed!');
      });
    }

    //Main render section
    return (
      <div className="container">
        <Header btnState={showAdd} refreshTask={fetch_} onAdd={() => setShowAdd(!showAdd)} title="Task Tracker" />
        {showAdd ? <AddTask addTask={addList} tasks={tasks}/> : ''}
        {tasks.length > 0 ? <Tasks tasks={tasks} doubleClick={doubleClick} onDelete={deleteTask}/> : 
        ('No Tasks Here')
        }
      </div>
    )};

//Export components
export default  App