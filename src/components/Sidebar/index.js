import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

import iconicLogo from "../../assets/svgs/white-iconic-logo.svg";
import homeInactiveIcon from "../../assets/svgs/dashboard-inactive-icon.svg";
import homeActiveIcon from "../../assets/svgs/dashboard-active-icon.svg";
import userInactiveIcon from "../../assets/svgs/user-inactive-icon.svg";
import userActiveIcon from "../../assets/svgs/user-active-icon.svg";
import categoreyInactiveIcon from "../../assets/svgs/category-inactive-icon.svg";
import categoryActiveIcon from "../../assets/svgs/category-active-icon.svg";
import toursInactiveIcon from "../../assets/svgs/tours-inactive-icon.svg";
import toursActiveIcon from "../../assets/svgs/tours-active-icon.svg";

const Sidebar = () => {
  const location = useLocation();

  return (
    <nav class="sidebar">
      <div>
        <div className="sidebar-logo-wrapper">
          <img src={iconicLogo} alt="logo" />
        </div>
        <ul class="side-nav">
          <Link to="/" className="routes-link">
            <li
              class={`side-nav__item ${
                location.pathname === "/" && "side-nav__item-active"
              }`}>
              {location.pathname === "/" ? (
                <img src={homeActiveIcon} alt="active icon" />
              ) : (
                <img src={homeInactiveIcon} alt="inactive icon" />
              )}
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/users" className="routes-link">
            <li
              className={`side-nav__item ${
                location.pathname === "/users" && "side-nav__item-active"
              }`}>
              {location.pathname === "/users" ? (
                <img src={userActiveIcon} alt="active icon" />
              ) : (
                <img src={userInactiveIcon} alt="inactive icon" />
              )}
              <span>Users</span>
            </li>
          </Link>
          <Link to="/categories" className="routes-link">
            <li
              class={`side-nav__item ${
                location.pathname === "/categories" && "side-nav__item-active"
              }`}>
              {location.pathname === "/categories" ? (
                <img src={categoryActiveIcon} alt="active icon" />
              ) : (
                <img src={categoreyInactiveIcon} alt="inactive icon" />
              )}
              <span>Categories</span>
            </li>
          </Link>
          <Link to="/tours" className="routes-link">
            <li
              class={`side-nav__item ${
                location.pathname === "/tours" && "side-nav__item-active"
              }`}>
              {location.pathname === "/tours" ? (
                <img src={toursActiveIcon} alt="active icon" />
              ) : (
                <img src={toursInactiveIcon} alt="inactive icon" />
              )}
              <span>Tours</span>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
