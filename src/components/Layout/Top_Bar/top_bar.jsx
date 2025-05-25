import React from "react";
import "./top_bar.css";
import { Link } from "react-router-dom";

const TopBar = () => {
    return (
        <div className="top_bar">
            <Link to="/account">Account</Link>
            <span className="vertical_line"></span>
            <Link to="/financial">Analytics</Link>
            <span className="vertical_line"></span>
            <Link to="/budgets">Budgets</Link>
            <span className="vertical_line"></span>
            <Link to="/settings">Settings</Link>
        </div>
    );
};

export default TopBar;