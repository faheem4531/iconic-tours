import React from "react";
import "./style.css";

import DropdownIcon from "../../assets/svgs/admin-dropdwon-icon.svg";

const Header = ({ title }) => {
  return (
    <>
      <div className="header-container">
        <div className="header-title">{title}</div>

        <div class="dropdown">
          <div
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            <div className="dropdown-icon-wrapper">
              <div className="header-sub-title">Admin</div>
              <img src={DropdownIcon} alt="icon" />
            </div>
          </div>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="#">
                Admin
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
