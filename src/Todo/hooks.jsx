/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';

function hooks() {
  const [count, setcount] = useState(0);

  const Increment = () => {
    setcount(count + 1);
  };

  const Decrement = () => {
    setcount(count - 1);
  };
  return (
    <div className='flex'>
      <button onClick={Increment} className="text-7xl">
        +
      </button>
      <div className='text-7xl'>{count}</div>
      
      <button onClick={Decrement} className="text-7xl">
        -
      </button>
    </div>
  );
}

export default hooks;
