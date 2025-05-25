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
      <TextEntry placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <TextEntry placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} type="number" />
      <TextEntry placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
      <Button label="Add Transaction" onClick={handleSubmit} />
    </div>
  );
};

export default AddTransactionForm;