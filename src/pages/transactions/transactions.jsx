import React from "react";
import "./transactions.css";
import { Link } from "react-router-dom";
import Card from "../../components/transaction_card.jsx";

const Transactions = () => {
    return(
        <div className="container">
            <div className="sidebar">
                <Card />
            </div>
            <div className="content">
                <h1>test two</h1>
            </div>
        </div>
    )
}

export default Transactions;