import React from "react";
import "./transaction_bar.css";
import { Link } from "react-router-dom";
import Card from "./transaction_card.jsx";

import Database from "../../public/backend placeholder/database.json"

const TransactionBar = () => {
    const transactions = Database.transactions.map(transaction => ({
        ...transaction,
        imageUrl: "src/assets/placeholder_pfp.png"
    }))

    return <div className="TransactionBar">
        {transactions.map((transaction, index) =>
                    <Card
                    key={index}
                    {...transaction}
                    />
                )}
    </div>
}
export default TransactionBar;