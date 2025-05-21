import React from "react";
import "./financial.css";
import { Link } from "react-router-dom";

import TransactionGraph from "../../components/Transaction_Graph/transaction_graph.jsx"
import TransactionBar from "../../components/Transaction_Bar/transaction_bar.jsx";


const Financial = () => {

    return( 
        <div className="container">
            <TransactionBar></TransactionBar>
            <div className="financialDashboard">
                <h1>test two</h1>
                <TransactionGraph/>
            </div>
        </div>
    )
}


export default Financial;