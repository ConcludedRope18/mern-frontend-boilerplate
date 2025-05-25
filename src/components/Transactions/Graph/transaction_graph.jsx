import React from 'react'
import "./transaction_graph.css"

import Database from "../../../../public/backend placeholder/database.json"

const TransactionGraph = ({ balances = [50, 42, 31, 12, -240, -250, 12, 31, 42, 50] }) => {
  const maxValue = Math.max(...balances.map(Math.abs));
  const isNegative = balances.some(b => b < 0);

  return (
    <div className="transaction-graph">
      <h3 className="graph-title">Balance History</h3>
      <div className="graph-square">
        {isNegative && <div className="zero-line" />}
        
        <div className="graph-bars">
          {balances.map((balance, index) => {
            const heightPercent = (Math.abs(balance) / maxValue) * 100;
            const isPositive = balance >= 0;
            
            return (
              <div 
                key={index}
                className={`graph-bar ${isPositive ? 'positive' : 'negative'}`}
                style={{
                  height: `${heightPercent}%`,
                  bottom: isPositive ? '50%' : 'auto',
                  top: isPositive ? 'auto' : '50%'
                }}
                data-amount={balance.toFixed(2)}
              >
                <div className="bar-label">{index + 1}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TransactionGraph;