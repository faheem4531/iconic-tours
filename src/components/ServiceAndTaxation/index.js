import React from "react";
import "./style.css";

const ServiceAndTaxation = ({
  title,
  setValue,
  type,
  value,
  setSelectType,
}) => {
  return (
    <div className="margin-wrapper">
      <div className="text-and-handling-title">{title}</div>
      <div className="tax-and-services-content-container">
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            checked={type === "ratio"}
            onClick={() => {
              setSelectType("ratio");
              setValue(0);
            }}
          />
          <label
            class="form-check-label use-defind-ratio"
            for="flexRadioDefault1">
            Use defined ratio
          </label>
        </div>
        <input
          className="use-defind-ratio-input"
          placeholder="5%"
          onChange={(event) => setValue(event.target.value || 0)}
          value={type !== "ratio" ? null : value}
          disabled={type !== "ratio"}
        />
        <div class="form-check">
          <input
            class="form-check-input "
            type="radio"
            checked={type !== "ratio"}
            onClick={() => {
              setSelectType("manual");
              setValue(0);
            }}
          />
          <label
            class="form-check-label use-defind-ratio"
            for="flexRadioDefault2">
            Enter Manually
          </label>
        </div>
        <input
          className="use-defind-ratio-input"
          // placeholder="500"
          onChange={(event) => setValue(event.target.value || 0)}
          value={type !== "ratio" ? value : null}
          disabled={type === "ratio"}
        />
      </div>
    </div>
  );
};

export default ServiceAndTaxation;
