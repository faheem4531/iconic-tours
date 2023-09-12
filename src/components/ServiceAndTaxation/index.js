import React from "react";
import "./style.css";

const ServiceAndTaxation = ({
  title,
  setValue,
  type,
  value,
  setSelectType,
  selectedType
}) => {
  return (
    <div className="margin-wrapper">
      <div className="text-and-handling-title">{title}</div>
      <div className="tax-and-services-content-container">
        {selectedType === "RATIO" && <div className="use-define-wraper">
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
            placeholder="0%"
            onChange={(event) => setValue(event.target.value || 0)}
            value={type !== "ratio" ? null : parseInt(value)}
            disabled={type !== "ratio"}
          /> </div>}
        {selectedType === "MANUAL" && <div className="use-define-wraper">
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
            placeholder="0"
            onChange={(event) => setValue(event.target.value || 0)}
            value={type !== "ratio" ? parseInt(value) : null}
            disabled={type === "ratio"}
          />
        </div>}
      </div>
    </div>

  );
};

export default ServiceAndTaxation;
