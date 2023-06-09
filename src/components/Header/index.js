import React from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

import DropdownIcon from "../../assets/svgs/admin-dropdwon-icon.svg";

const Header = ({ title }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

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
              <Link class="dropdown-item" to="/admin">
                Admin
              </Link>
            </li>
            <li>
              <button class="dropdown-item" onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
