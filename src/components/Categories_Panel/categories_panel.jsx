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
            <div className="category-info">
              <span className="category-name">{category.name}</span>
              <span className="category-count">{category.transactionCount} transactions</span>
            </div>
            <div className="category-stats">
              <span className="category-percentage">{category.percentageUsed}% used</span>
              <span className="category-remaining">{category.monthlyRemaining.toFixed(2)} RON left</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPanel;