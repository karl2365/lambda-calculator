import React from "react";
import '../buttons.css';

const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button  onClick={() => props.update(props.operator.value)} className='operatorButton'>{props.operator.value}</button>
    </>
  );
};

export default OperatorButton;
