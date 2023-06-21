import React from "react";
import "./style.css";

import { Link } from "react-router-dom";

import arrowIcon from "../../assets/svgs/right-arrow-icon.svg";

const ToursCard = ({ item }) => {
  return (
    <div className="tours-card">
      <div>
        <div className="card-name">{item?.category?.name}</div>
        <div className="tours-card-title">{item?.name}</div>
      </div>
      <div className="arrow-container">
        <div className="ticket-num">
          Ticket: {item.remainingTickets}/{item.totalTickets}
        </div>
        <Link to="/tours">
          <div className="arrow-wrapper">
            <img src={arrowIcon} alt="icon" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ToursCard;
