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
      <label>Budget Name</label>
      <TextEntry placeholder="e.g. Utilities" value={name} onChange={e => setName(e.target.value)} />

      <label>Allocated Amount</label>
      <TextEntry placeholder="e.g. 1000" type="number" value={allocated} onChange={e => setAllocated(e.target.value)} />

      <Button label="Add Budget" onClick={handleSubmit} />
    </div>
  );
};

export default AddBudgetForm;
