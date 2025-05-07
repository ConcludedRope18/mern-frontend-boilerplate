import React from 'react'
import "./transaction_card.css"

const Card = ({name, amount, imageUrl}) => {
  const transactionType = amount >= 0 ? "Received" : "Sent";
  amount = Math.abs(amount)
    return (
      <div className="card">
        <img className="pfp" src={imageUrl}></img>
        <div className="name">{name ?? "Client"}</div>
        <div className="message">{transactionType} ron {amount}</div>
      </div>
    );
  };

  export default Card;