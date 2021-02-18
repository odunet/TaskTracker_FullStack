//Dependables
import React from 'react';
import PropTypes from 'prop-types'
import Button from './Button'

//Main component || // React fucntion based component 1
const Header = (props) => {
    return (
    <header className="header">
      <h1>
        {props.title}
      </h1>
      <Button btnClick={props.onAdd} color={props.btnState? 'red' : 'green'} text={props.btnState ? 'Close' : 'Add'}/>
      <Button btnClick={props.refreshTask} color='blue' text='Fetch'/>
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