import React from "react";
import "./style.css";

import arrowIcon from "../../assets/svgs/right-arrow-icon.svg";

const ToursCard = ({item}) => {
  return (
    <div className="tours-card">
      <div>
        <div className="card-name">{item?.category?.name}</div>
        <div className="tours-card-title">
          {item?.name}
        </div>
      </div>
      <div className="arrow-container">
        <div className="ticket-num">Ticket: {item.remainingTickets}/{item.totalTickets}</div>
        <div className="arrow-wrapper">
          <img src={arrowIcon} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default ToursCard;
