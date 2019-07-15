import React from "react";
import '../buttons.css'

const SpecialButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button  onClick={() => props.update(props.special)} className='specialButton'>{props.special}</button>

    </>
  );
};

export default SpecialButton;
