import React from 'react';
import './budgets_panel.css';
import AddButton from '../Add_Button/add_button';
import { useNavigate } from "react-router-dom";


const BudgetsPanel = ({ budgets }) => {
  const navigate = useNavigate();
  return (
    <div className="budgets-panel">
      <h3 className="panel-title">Budgets</h3>
      <AddButton 
        onClick={() => navigate('/add-budget')} 
        label="New Budget"
      />
      <div className="budgets-list">
        {budgets.map(budget => (
          <div key={budget.id} className="budget-item">
            <div className="budget-header">
              <span className="budget-name">{budget.name}</span>
              <span className="budget-amount">
                {budget.spent.toFixed(2)}/{budget.allocated.toFixed(2)} RON
              </span>
            </div>
            <div className="budget-progress">
              <div 
                className="progress-bar"
                style={{ width: `${budget.percentage}%` }}
              />
            </div>
            <div className="budget-footer">
              <span className="percentage-used">{budget.percentage}% used</span>
              <span className="remaining-amount">{budget.remaining.toFixed(2)} RON remaining</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetsPanel;