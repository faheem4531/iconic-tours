import React from "react";
import "./style.css";

const SalesAnalysisCard = ({ title, Price, icon }) => {
  return (
    <div className="sales-analysis-card">
      <div className="revenue-wrapper">
        <div className="total-revenue">{title}</div>
        <img src={icon} alt="icon" />
      </div>
      <div className="revenue-ammount">${Price}</div>
    </div>
  );
};

export default SalesAnalysisCard;
