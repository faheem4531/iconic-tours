import React from "react";
import { useLocation } from "react-router-dom";

import "./style.css";

import { Sidebar } from "../components";

const Layout = ({ children }) => {
  const location = useLocation();

  return location.pathname === "/login" ? (
    <>{children}</>
  ) : (
    <div className="main-container">
      {/* SIDEBAR */}
      <Sidebar />
      {/* SIDEBAR */}

      {/* BODY */}
      <div className="body-container">{children}</div>
      {/* BODY */}
    </div>
  );
};

export default Layout;
