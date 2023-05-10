import React from "react";
import "./input.style.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
  clearIcon?: React.ReactNode;
  inputStyles?: React.CSSProperties;
  loading?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onChange,
  onClear,
  inputStyles,
  loading,
  ...rest
}) => {
  const handleClear = () => {
    if (onClear) {
      onClear();
    }
  };

  return (
    <div className="custom-input-container">
      <input
        type="text"
        className="custom-input"
        value={value}
        onChange={onChange}
        style={inputStyles}
        {...rest}
      />

      <span className="clear-icon" onClick={handleClear}>
        {loading ? (
          <div className="spinner" />
        ) : (
          value && <AiOutlineCloseCircle />
        )}
      </span>
    </div>
  );
};

export default CustomInput;
