import React from "react";
import "./Button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  variant?: "outlined"; 
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = "",
  disabled = false,
  variant,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`btn-new-card ${variant === "outlined" ? "btn-outlined" : ""} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
