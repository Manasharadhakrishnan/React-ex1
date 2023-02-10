import React, { useState } from 'react';

function InputBox() {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <input type="text" value={value} readOnly />
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default InputBox;

