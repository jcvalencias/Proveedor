import React, { useState } from 'react';

const AutoResizingInput = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  console.log(value.length);

  return (
    <div className="input-container">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="auto-resizing-input"
        style={{ width: `${Math.max(value.length * 10, 100)}px` }}
        placeholder="Type here..."
      />
    </div>
  );
};

export default AutoResizingInput;