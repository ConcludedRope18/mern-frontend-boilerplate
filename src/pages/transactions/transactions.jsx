import React from "react";
import "./transactions.css";
import { Link } from "react-router-dom";
import Card from "../../components/transaction_card.jsx";

// const response = await fetch('/transactions.csv');
// const csvData = await response.text();

// const parseCSV = (csvText) => {
//     const lines = csvText.trim().split('\n');
//     const headers = lines[0].split(',');
    
//     return lines.slice(1).map(line => {
//       const values = line.split(',');
//       return {
//         name: values[0]?.trim() || '',
//         amount: values[1]?.trim() || '',
//         imageUrl: "src/assets/placeholder_pfp.png"
//       };
//     });
//   };

// const transactions = parseCSV(csvData);

const Transactions = () => {
    return(
        <div className="container">
            <div className="sidebar">
                {/* {transactions.map((transaction, index) => (
                    <Card
                    key={index}
                    name={transaction.name}
                    amount={transaction.amount}
                    imageUrl="src/assets/placeholder_pfp.png"
                    />
                ))} */}
                <Card 
                name="Bananierul"
                amount="paid ron 250"
                imageUrl="src/assets/placeholder_pfp.png"/>
                <Card 
                name="Client"
                amount="received ron 17"
                imageUrl="src/assets/placeholder_pfp.png"/>
                <Card 
                name="Client"
                amount="received ron 23"
                imageUrl="src/assets/placeholder_pfp.png"/>
            </div>
            <div className="content">
                <h1>test two</h1>
            </div>
        </div>
    )
}


export default Transactions;