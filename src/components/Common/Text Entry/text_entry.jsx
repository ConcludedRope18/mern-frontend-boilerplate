import React from "react";
import "./text_entry.css";

const TextEntry = ({ 
  placeholder, 
  type = "text",
  value = '',
  onChange,
  label,
  required = false
}) => {
  return (
    <div className="text_entry">
      {label && <label className="text_entry_label">{label}</label>}
      <input
        className="text_entry_input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        required={required}
      />
    </div>
  );
};

export default TextEntry;