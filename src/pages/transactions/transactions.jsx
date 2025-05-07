import React from "react";
import "./transactions.css";
import { Link } from "react-router-dom";
import Card from "../../components/transaction_card.jsx";

import TransactionData from "../../../public/backend placeholder/database.json"


const Transactions = () => {
    // console.log("TransactionData: ", TransactionData);
    const transactions = TransactionData.transactions.map(transaction => ({
        ...transaction,
        imageUrl: "src/assets/placeholder_pfp.png"
    }))

    return( 
        <div className="container">
            <div className="sidebar">
                {transactions.map((transaction, index) =>
                    <Card
                    key={index}
                    {...transaction}
                    />
                )}
            </div>
            <div className="content">
                <h1>test two</h1>
            </div>
        </div>
    )
}


export default Transactions;