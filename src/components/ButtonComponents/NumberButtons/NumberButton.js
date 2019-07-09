import React from "react";
import '../buttons.css';

const NumberButton = (props) => {
  console.log(props);

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.number === '0' ? <button className='zero'>{props.number}</button> :  <button className='numberButton'>{props.number}</button>}
    </>
  );
};

export default NumberButton;