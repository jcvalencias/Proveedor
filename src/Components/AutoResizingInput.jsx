import React, { useState, useEffect } from 'react';

const AutoResizingInput = () => {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);

  const handleTextChange = (e) => {
    setValue(e.target.value);
  };

  const  handleSave = () => {
    if(value === '') {return;}
    setItems([...items, '#'+value]);
    setValue('');
  }

  const handleDelete = (index) => {
    let newArray = items.filter((_, i) => i !== index);
    setItems(newArray)
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
        <button className='btnDelete' onClick={()=>handleDelete(index)}></button>
      </div>
      ))}
    </div>
  );
};

export default AutoResizingInput;