import React from 'react'
import "./transaction_card.css"

const Card = ({name, amount, imageUrl}) => {
    return (
      <div className="card">
        <img className="pfp" src={imageUrl}></img>
        <div className="name">{name}</div>
        <div className="message">{amount}</div>
      </div>
    );
  };

  export default Card;