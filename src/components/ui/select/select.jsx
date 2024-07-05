import React from "react";
import "./select.css";

export const Select = ({ options, className = "", id }) => {
  return (
    <select id={id} className={`select ${className}`}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
