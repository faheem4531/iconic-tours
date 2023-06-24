import React from "react";
import moment from "moment";
import { toast } from "react-toastify";
import api from "../../Services/Apis";

import dotsIcon from "../../assets/svgs/donts-icon.svg";
import "./style.css";

const ActiveToursCard = ({
  bgColor,
  title,
  subTitle,
  date,
  time,
  totalTickets,
  remainingTickets,
  onEdit,
  setSelectedPackageId,
  card,
  getTours,
  id,
}) => {

  console.log("title", title)
  const deleteTours = async () => {
    try {
      await api.delete(`/api/v1/package/${id}`);
      toast("Tour deleted successfully", { type: "success" });
      getTours();
    } catch (error) {
      toast(error.response.data.message || "Failed to login", {
        type: "error",
      });
    }
  };

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
              <button
                class="dropdown-item"
                onClick={() => {
                  onEdit(card);
                  setSelectedPackageId(id);
                }}>
                Edit
              </button>
            </li>
            <li>
              <button onClick={deleteTours} class="dropdown-item">
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="tousr-sub-title">{subTitle}</div>
      <div className="tousr-date-time">
        {date}, <span>{time}</span>
      </div>
      <div className="category-wrapper">
        {card?.availableTicket?.map((item, index) => {
          return (
            <div className="category-wrapper" key={index}>
              <div className="dot" />
              <div className="category-name">{item.name}</div>
            </div>
          );
        })}
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
