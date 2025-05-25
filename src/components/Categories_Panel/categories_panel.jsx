import React from 'react';
import './categories_panel.css';
import AddButton from '../Add_Button/add_button';
import { useNavigate } from "react-router-dom";

const CategoriesPanel = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <div className="categories-panel">
      <h3 className="panel-title">Categories</h3>
      <AddButton 
        onClick={() => navigate('/add-category')} 
        label="New Category"
      />
      <div className="categories-list">
        {categories.map(category => (
          <div key={category.id} className="category-item">
            <div className="category-header">
              <span className="category-name">{category.name}</span>
              <span className="category-percentage">{category.percentageUsed}% of total</span>
            </div>
            <div className="category-progress">
              <div 
                className="progress-bar"
                style={{ width: `${category.percentageUsed}%` }}
              />
            </div>
            <div className="category-footer">
              <span className="category-spent">{category.monthlySpent.toFixed(2)} RON spent</span>
              <span className="transaction-count">{category.transactionCount} transactions</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPanel;