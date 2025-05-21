import React from "react";
import "./simple_button.css";

const Button = ({ label }) => {
  return <button className="button">{label}</button>;
};

export default Button;