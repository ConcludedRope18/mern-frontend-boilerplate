import React from 'react';
import TopBar from '../Top_Bar/top_bar';
import './wrapper.css';

const Wrapper = ({ children }) => {
  return (
    <div className="wrapper">
      <TopBar />
      <div className="container">
        {children}
      </div>
    </div>
  );
};

export default Wrapper;