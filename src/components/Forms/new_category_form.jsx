import React, { useState } from 'react';
import './form.css';
import Button from '../Common/Button/simple_button';
import TextEntry from '../Common/Text Entry/text_entry';

const AddCategoryForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [monthlyBudget, setMonthlyBudget] = useState('');

  const handleSubmit = () => {
    const newCategory = {
      name,
      monthlyBudget: parseFloat(monthlyBudget),
    };
    onSubmit?.(newCategory);
  };

  return (
    <div className="form-container">
      <h3>Add Category</h3>
      <label>Category Name</label>
      <TextEntry placeholder="e.g. Health & Wellness" value={name} onChange={e => setName(e.target.value)} />

      <label>Monthly Budget</label>
      <TextEntry placeholder="e.g. 300" type="number" value={monthlyBudget} onChange={e => setMonthlyBudget(e.target.value)} />

      <Button label="Add Category" onClick={handleSubmit} />
    </div>
  );
};

export default AddCategoryForm;
