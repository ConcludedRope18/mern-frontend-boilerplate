import React from "react";
import { fetchBudgets, fetchCategories, fetchTransactions } from '../../database_functions';
import Wrapper from "../../components/Layout/Wrapper/wrapper";
import TransactionBar from "../../components/Transactions/Bar/transaction_bar";
import TransactionGraph from "../../components/Transactions/Graph/transaction_graph";
import BudgetsPanel from '../../components/Budgets_Panel/budgets_panel';
import CategoriesPanel from '../../components/Categories_Panel/categories_panel';
import "./financial.css";
import AddButton from "../../components/Add_Button/add_button";

const Financial = () => {
  const transactions = fetchTransactions();
  const budgets = fetchBudgets();
  const categories = fetchCategories();

  return (
    <Wrapper>
      <div className="financial-dashboard">
        {/* Left - Graph */}
        <div className="graph-column">
          <TransactionGraph />
          <p className="graph-description">
            This graph shows your recent daily balances and transaction trends.
          </p>
        </div>

          <div className="transactions-column">
            <TransactionBar transactions={transactions} />
          </div>
          <div className="budgets-container">
            <BudgetsPanel budgets={budgets} />
          </div>
          <div className="categories-container">
            <CategoriesPanel categories={categories} />
          </div>
      </div>
    </Wrapper>
  );
};

export default Financial;