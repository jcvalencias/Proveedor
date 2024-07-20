import React, { useState, useEffect } from 'react';

const AutoResizingInput = () => {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);

  const handleTextChange = (e) => {
    setValue(e.target.value);
  };

  const  handleSave = () => {
    setItems([...items, value]);
    setValue('');
  }

  useEffect(() => {
    console.log(items);
  }, [items]);
  

  return (
    <div className='incluyeOpciones'>
    <div className="input-container">
      <input
        type="text"
        value={value}
        onChange={handleTextChange}
        className="auto-resizing-input"
        style={{ width: `${Math.max(value.length * 6, 10)}px` }}
        placeholder=""
      />
      <button className='btnOk' onClick={handleSave}></button>
    </div>
      {items.map((item, index)=> (
      <div className='optionIncluye'>
        <span>
          {item}
        </span>
        <button className='btnDelete'></button>
      </div>
      ))}
    </div>
  );
};

export default AutoResizingInput;