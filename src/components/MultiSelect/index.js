import React from "react";
import "./style.css";
import { Select } from "antd";

const { Option } = Select;

const MultiSelect = ({ name, options, handleChange, handleBlur, value }) => {
  return (
    <div>
      <div className="assign-to">
        Assign to <span style={{ color: "#FF5C00" }}>*</span>
      </div>
      <Select
        mode="multiple"
        style={{ width: "100%" }}
        onChange={handleChange}
        onBlur={handleBlur}
        name={name}
        value={value}>
        {options?.map((option) => (
          <Option key={option._id} value={option._id}>
            {option.firstName}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default MultiSelect;
