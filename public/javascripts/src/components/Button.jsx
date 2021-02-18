//Dependables
import React from 'react';
import PropTypes from 'prop-types'

//Main component || // React fucntion based component 1
const Button = (props) => {
    return (
      <button onClick={props.btnClick} style={{backgroundColor: props.color}} className="btn">
        {props.text}
      </button>
    );
  }

  //Set default props
Button.defaultProps = {
    color: "steelblue"
}

Button.propTypes = {
    text:PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

//Export components
export default Button