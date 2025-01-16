import React from "react";
import "./Input.css";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasIcon?: boolean;
  type?: string;
  name?: string;
  label?: string;
  icon?: React.ReactNode;
  onIconClick?: () => void; 
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder = "",
  value,
  onChange,
  hasIcon = false,
  type = "text",
  name,
  label,
  icon,
  onIconClick, 
  ...props
}) => {
  return (
    <div className="input-field">
      {label && <label className="input-label">{label}</label>}
      <div className="input-wrapper">
        <input
          {...props}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`input-element ${hasIcon ? "with-icon" : ""}`}
        />
        {hasIcon && (
          <span
            className="input-icon"
            onClick={onIconClick} 
          >
            {icon || <DefaultIcon />}
          </span>
        )}
      </div>
    </div>
  );
};

const DefaultIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="10" cy="10" r="7" />
    <line x1="21" y1="21" x2="15" y2="15" />
  </svg>
);

export default InputField;
