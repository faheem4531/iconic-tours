import React from "react";
import "./style.css";

const Input = ({
  label,
  placeholder,
  type,
  color,
  size,
  height,
  labelSize,
  radius,
  border,
  top,
  fontSize,
  straric,
  name,
  handleChange,
  handleBlur,
  value,
  minValue=0
}) => {
  return (
    <div>
      <div className="label" style={{ fontSize: labelSize, marginTop: top }}>
        {label}
        {straric ? null : (
          <span className="span" style={{ color: color, fontSize: size }}>
            *
          </span>
        )}
      </div>
      <input
        className="input"
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        style={{
          height: height,
          borderRadius: radius,
          border: border,
          fontSize: fontSize,
        }}
        placeholder={placeholder}
        type={type}
        min={minValue}
      />
    </div>
  );
};

export default Input;
