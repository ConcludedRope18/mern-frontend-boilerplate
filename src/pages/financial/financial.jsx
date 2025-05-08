import React from "react";
import "./financial.css";
import { Link } from "react-router-dom";

import TransactionBar from "../../components/transaction_bar.jsx"
import TransactionGraph from "../../components/transaction_graph.jsx"


const Financial = () => {

    return( 
        <div className="container">
            <TransactionBar />
            <div className="financialDashboard">
                <h1>test two</h1>
                <TransactionGraph />
            </div>
        </div>
    )
}


export default Financial;