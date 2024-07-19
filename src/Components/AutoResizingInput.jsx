import React, { useState, useEffect } from 'react';

const AutoResizingInput = () => {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);

  const handleTextChange = (e) => {
    setValue(e.target.value);
  };

  const  handleSave = () => {
    setItems([...items, value]);
  }

  useEffect(() => {
    console.log(items);
  }, [items]);
  

  return (
    <>
    <div className="input-container">
      <input
        type="text"
        value={value}
        onChange={handleTextChange}
        className="auto-resizing-input"
        style={{ width: `${Math.max(value.length * 6, 10)}px` }}
        placeholder="|"
      />
      <button className='btnEdit' onClick={handleSave}></button>
    </div>
    <div className='Options'>
      {items.map((item, index)=> (
      <div className='optionIncluye'>
        <span>
          {item}
        </span>
        <button className='btnDelete'></button>
      </div>
      ))}
    </div>
    </>
  );
};

export default AutoResizingInput;