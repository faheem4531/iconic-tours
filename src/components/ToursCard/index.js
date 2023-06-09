import React from "react";
import "./style.css";

import arrowIcon from "../../assets/svgs/right-arrow-icon.svg";

const ToursCard = () => {
  return (
    <div className="tours-card">
      <div>
        <div className="card-name">DownTown:</div>
        <div className="tours-card-title">
          Night Tour With
          <br /> Audio Guide
        </div>
      </div>
      <div className="arrow-container">
        <div className="ticket-num">Ticket: 25/650</div>
        <div className="arrow-wrapper">
          <img src={arrowIcon} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default ToursCard;
