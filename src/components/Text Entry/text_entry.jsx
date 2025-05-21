import React from "react";
import "./text_entry.css";

const TextEntry = ({ placeholder, type = "text" }) => {
  return (
    <div className="text_entry">
      <input
        className="text_entry_input"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextEntry;