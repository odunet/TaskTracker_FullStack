//Dependables
import PropTypes from 'prop-types'
import Button from './Button'
import React, { useState, useContext } from 'react';
import {store} from '../store/todoStore'

//Main component || // React fucntion based component 1
const Header = (props) => {
    //Fetches data from the Express API on the click of the buton
    const fetch_ = async () => {
      let response = await fetch('/api/users')
      let data = await response.json()
      let data_ = JSON.parse(data["external message"])

      //Set the task state to the data pulled from the server
      return data_;
    }

    const {state, dispatch} = useContext(store)
    const refreshTask = async () => {
      let data = await fetch_();
      dispatch({type: "Load_Todo", data: []})
    }

    return (
    <header className="header">
      <h1>
        {props.title}
      </h1>
      <Button btnClick={props.onAdd} color={props.btnState? 'red' : 'green'} text={props.btnState ? 'Close' : 'Add'}/>
      <Button btnClick={refreshTask} color='blue' text='Fetch'/>
    </header>
    );
  }

  //Sets default props values
Header.defaultProps = {
  title: "Fisayo"
}

 //Sets the expected type of a props and indicate that it is required.
Header.propTypes = {
  title: PropTypes.string.isRequired
}
  
//Export components
export default  Header