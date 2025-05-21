import React from 'react'
import "./transaction_graph.css"

import Database from "../../../public/backend placeholder/database.json"

const Graph = ({ maxbal = 10, bal = 50, transactions = [9, 3, 4, 5, 6, 7, 2, 10, 3, 3] }) => {
    return (
        <div className="graph">
            {transactions.map((amount, index) => (
                <div
                    key={index}
                    className="graphSegment"
                    style={{ 
                        height: `${(amount / maxbal) * 100}%` 
                    }} 
                />
            ))}
        </div>
    );
};

export default Graph