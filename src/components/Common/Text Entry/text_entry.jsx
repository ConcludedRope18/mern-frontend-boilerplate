import React from "react";
import "./text_entry.css";

const TextEntry = ({ placeholder, type = "text", value, onChange }) => {
  return (
    <input
      className="text-entry"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextEntry;
