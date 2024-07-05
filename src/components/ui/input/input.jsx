import React from "react";
import "./input.css";

export const Input = ({ placeholder, type = "text", className = "", id }) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={`input ${className}`}
    />
  );
};
