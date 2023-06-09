import React from "react";
import "./style.css";

import dotsIcon from "../../assets/svgs/donts-icon.svg";

const ActiveToursCard = ({
  bgColor,
  title,
  subTitle,
  date,
  time,
  totalTickets,
  remainingTickets,
}) => {
  return (
    <div className="active-tour-card">
      <div className="downtown-tours-wrapper">
        <div
          className="downtown-bg-wrapper"
          style={{ backgroundColor: bgColor }}>
          <div className="tour-title">{title}</div>
        </div>
        <div class="dropdown">
          <div
            style={{ padding: 7 }}
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            <img src={dotsIcon} alt="icon" />
          </div>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="#">
                Edit
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="tousr-sub-title">{subTitle}</div>
      <div className="tousr-date-time">
        {date}, <span>{time}</span>
      </div>
      <div className="category-wrapper">
        <div className="category-name">Kids</div>
        <div className="dot" />
        <div className="category-name">Adult</div>
        <div className="dot" />
        <div className="category-name">Military</div>
      </div>
      <div className="total-tickets-wrapper">
        <div className="total-ticket">
          Total Tickets: <span>{totalTickets}</span>
        </div>
        <div className="total-ticket">
          Remaining Tickets: <span>{remainingTickets}</span>
        </div>
      </div>
    </div>
  );
};

export default ActiveToursCard;
