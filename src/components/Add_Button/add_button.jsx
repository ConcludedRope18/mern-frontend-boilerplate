import React from 'react';
import './add_button.css';

const AddButton = ({ onClick, label = "Add New" }) => {
  return (
    <button className="add-button" onClick={onClick}>
      <div className="add-button-content">
        <span className="add-icon">+</span>
        <span className="add-label">{label}</span>
      </div>
    </button>
  );
};

export default AddButton;