import React, { useState } from 'react';
import './form.css';
import Button from '../Common/Button/simple_button';
import TextEntry from '../Common/Text Entry/text_entry';

const AddTransactionForm = ({ onSubmit }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = () => {
    const newTransaction = {
      description,
      amount: parseFloat(amount),
      category,
    };
    onSubmit?.(newTransaction);
  };

  return (
    <div className="form-container">
      <h3>Add Transaction</h3>
      <label>Description</label>
      <TextEntry placeholder="e.g. Grocery shopping" value={description} onChange={e => setDescription(e.target.value)} />

      <label>Amount</label>
      <TextEntry placeholder="e.g. 75.50" type="number" value={amount} onChange={e => setAmount(e.target.value)} />

      <label>Category</label>
      <TextEntry placeholder="e.g. Food & Dining" value={category} onChange={e => setCategory(e.target.value)} />

      <Button label="Add Transaction" onClick={handleSubmit} />
    </div>
  );
};

export default AddTransactionForm;
