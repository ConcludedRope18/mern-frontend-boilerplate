import React, { useState } from 'react';
import './form.css';
import Button from '../Common/Button/simple_button';
import TextEntry from '../Common/Text Entry/text_entry';

const AddBudgetForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [allocated, setAllocated] = useState('');

  const handleSubmit = () => {
    const newBudget = {
      name,
      allocated: parseFloat(allocated),
    };
    onSubmit?.(newBudget);
  };

  return (
    <div className="form-container">
      <h3>Add Budget</h3>
      <TextEntry placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <TextEntry placeholder="Allocated" value={allocated} onChange={e => setAllocated(e.target.value)} type="number" />
      <Button label="Add Budget" onClick={handleSubmit} />
    </div>
  );
};

export default AddBudgetForm;