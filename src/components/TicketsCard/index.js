import React from "react";
import "./style.css";

const TicketsCard = ({ title, subTitle, textAlign, color, bgColor, width }) => {
  return (
    <div
      className="ticket-card"
      style={{ backgroundColor: bgColor, width: width }}>
      <div className="ticket-card-title" style={{ textAlign: textAlign }}>
        {title}
      </div>
      <div
        className="ticket-card-sub-title"
        style={{ textAlign: textAlign, color: color }}>
        {subTitle}
      </div>
    </div>
  );
};

export default TicketsCard;
