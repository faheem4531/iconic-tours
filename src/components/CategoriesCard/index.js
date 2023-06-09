import React from "react";
import "./style.css";

import dotsIcon from "../../assets/svgs/dots-white-icon.svg";

const CategoriesCard = ({ bgColor, title, onEdit }) => {
  return (
    <>
      <div
        className="category-card-container"
        style={{ backgroundColor: bgColor }}>
        <div className="category-card-title">{title}</div>
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
              <button class="dropdown-item" onClick={onEdit}>
                Edit
              </button>
            </li>
            <li>
              <button class="dropdown-item">Delete</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CategoriesCard;
