import React from "react";
import "./style.css";

const SelectInput = ({ children, label, color }) => {
  return (
    <div>
      <div className="select-label">
        {label}
        <span className="span-star" style={{ color: color }}>
          *
        </span>
      </div>
      <select class="form-select" aria-label="Default select example">
        {children}
      </select>
    </div>
  );
};

export default SelectInput;
