import React from 'react'
import "./transaction_card.css"

const Card = ({name, amount, imageUrl, date, message}) => {
  const transactionType = amount >= 0 ? "Received" : "Sent";
  amount = Math.abs(amount)
    return (
      <div className="card">
        <img className="pfp" src={imageUrl}></img>

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

  export default Card;