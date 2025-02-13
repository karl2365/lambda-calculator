import React, {useState} from "react";

//import any components needed
import {numbers} from '../../../data';
import NumberButton from './NumberButton';

//Import your array data to from the provided data file
const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [number, setNumber] = useState(numbers);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
           {number.map(numb => <NumberButton number={numb} update={props.update} />
       )}
    </div>
  );
};
export default Numbers;