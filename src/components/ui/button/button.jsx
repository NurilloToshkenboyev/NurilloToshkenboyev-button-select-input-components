import React from "react";
import "./button.css";

export const Button = ({
  children,
  variant = "primary",
  type = "button",
  className = "",
  id,
  startIcon,
  endIcon,
}) => {
  return (
    <button id={id} type={type} className={`btn ${variant} ${className}`}>
      {startIcon && <span className="icon start-icon">{startIcon}</span>}
      <span>{children}</span>
      {endIcon && <span className="icon end-icon">{endIcon}</span>}
    </button>
  );
};


