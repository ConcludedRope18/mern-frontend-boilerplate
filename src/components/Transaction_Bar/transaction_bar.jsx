// src/components/TransactionBar.jsx
import React from "react";
import "./transaction_bar.css";
import { Link } from "react-router-dom";
import Card from "./Transaction_Card/transaction_card.jsx";
import { fetchTransactions } from "../../database_functions.jsx";

const TransactionBar = () => {
  const transactions = fetchTransactions(); // Use the imported function

  return (
    <div className="TransactionBar">
      {transactions.map((transaction, index) => (
        <Card
          key={index}
          {...transaction}
        />
      ))}
    </div>
  );
};

export default TransactionBar;