import React from 'react'
import "./transaction_card.css"

const Card = ({name, amount, imageUrl}) => {
  const transactionType = amount >= 0 ? "Received" : "Sent";
  amount = Math.abs(amount)
    return (
      <div className="card">
        <img className="pfp" src={imageUrl}></img>

        <div className="card-content">
          <div className="name">
            {name ?? "Client"}
            <div className="date">35.89.2312</div>
          </div>
          <div className="sum">{transactionType} ron {amount}</div>
          <div className="message">
            Lorem, ipsum dolor sit amet consectetur 
          </div>
        </div>
      </div>
    );
  };

  export default Card;