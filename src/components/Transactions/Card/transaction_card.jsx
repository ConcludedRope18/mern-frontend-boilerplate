import React from 'react';
import "./transaction_card.css";
import Pfp from '../../Common/Pfp/pfp';

const Transaction_Card = ({ name, amount, imageUrl, date, message }) => {
  const transactionType = amount >= 0 ? "Received" : "Sent";
  amount = Math.abs(amount);
  return (
    <div className="card">
      <Pfp imageUrl={imageUrl}/>
      <div className="card-content">
        <div className="name">
          {name ?? "Client"}
          <div className="date">{date}</div>
        </div>
        <div className="sum">{transactionType} ron {amount}</div>
        <div className="message">
          {message}
        </div>
      </div>
    </div>
  );
};

export default Transaction_Card;