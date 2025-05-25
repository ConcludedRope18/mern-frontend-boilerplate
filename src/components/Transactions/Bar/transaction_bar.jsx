// src/components/TransactionBar.jsx
import React from "react";
import "./transaction_bar.css";
import { Link } from "react-router-dom";
import Transaction_Card from "../Card/transaction_card.jsx";
import { fetchTransactions } from "../../../database_functions.jsx";
import AddButton from "../../Add_Button/add_button.jsx";
import { useNavigate } from "react-router-dom";

const TransactionBar = () => {
  const transactions = fetchTransactions();
  const navigate = useNavigate(); 

  return (
    <div className="transaction-bar-container">
      <AddButton 
        onClick={() => navigate('/add-transaction')} 
        label="New Transaction"
      />
      {transactions.map((transaction, index) => (
        <Transaction_Card key={index} {...transaction} />
      ))}
    </div>
  );
};

export default TransactionBar;