import React, { useState } from 'react';

function CheckBox() {
  const [items, setItems] = useState([]);
  const [newItemText, setNewItemText] = useState('');
  const [editingItemIndex, setEditingItemIndex] = useState(null);
  const [editingText, setEditingText] = useState('');

  function ChckBx({ text, isChecked, onChange }) {
    return (
      <div className="chckbx">
        <input
          className="checkBox"
          type="checkbox"
          id={'chbx' + text}
          checked={isChecked}
          onChange={onChange}
        />
        <label htmlFor={'chbx' + text}>{text}</label>
      </div>
    );
  }

  const handleAddItem = () => {
    if (newItemText.trim() === '') return;
    setItems([...items, { text: newItemText, isChecked: false }]);
    setNewItemText('');
  };

  const handleEditItem = (index) => {
    setEditingItemIndex(index);
    setEditingText(items[index].text);
  };

  const handleSaveEdit = () => {
    const updatedItems = items.map((item, index) =>
      index === editingItemIndex ? { ...item, text: editingText } : item
    );
    setItems(updatedItems);
    setEditingItemIndex(null);
    setEditingText('');
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleCheckBoxChange = (index) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, isChecked: !item.isChecked } : item
    );
    setItems(updatedItems);
  };

  return (
    <div className="checkBoxDiv">
      <div>
        <input
          type="text"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
          placeholder="Agregar tipo de trabajo"
        />
        <button onClick={handleAddItem}>Agregar</button>
      </div>
        {items.map((item, index) => (
            <div className='chckbxItem'>
              <ChckBx
              text={item.text}
              isChecked={item.isChecked}
              onChange={() => handleCheckBoxChange(index)}
            />
            <button onClick={() => handleEditItem(index)}>Editar</button>
            <button onClick={() => handleDeleteItem(index)}>Borrar</button>
            </div>
          ))}
      
      {editingItemIndex !== null && (
        <div>
          <input
            type="text"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
          />
          <button onClick={handleSaveEdit}>Save</button>
        </div>
      )}
    </div>
  );
}

export default CheckBox;
