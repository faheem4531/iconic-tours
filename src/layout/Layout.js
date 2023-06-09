import React from "react";
import "./style.css";

import { Sidebar } from "../components";

const Layout = ({ childern }) => {
  return (
    <div className="main-container">
      {/* SIDEBAR */}
      <Sidebar />
      {/* SIDEBAR */}

      {/* BODY */}
      <div className="body-container">{childern}</div>
      {/* BODY */}
    </div>
  );
};

export default Layout;
