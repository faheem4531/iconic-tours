import React from "react";
import "./style.css";

import totalRevenueIcon from "../../assets/svgs/total-revenue-icon.svg";

const SalesAnalysisCard = () => {
  return (
    <div className="sales-analysis-card">
      <div className="revenue-wrapper">
        <div className="total-revenue">Total Revenue</div>
        <img src={totalRevenueIcon} alt="icon" />
      </div>
      <div className="revenue-ammount">$25k</div>
    </div>
  );
};

export default SalesAnalysisCard;
