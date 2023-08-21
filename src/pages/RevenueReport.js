import React, { useEffect, useState } from "react";

import { Header, RevenueTable } from "../components";
import '../styles/RevenueReport.css';
import { useLocation } from "react-router-dom";

import api from "../Services/Apis";

const RevenueReport = () => {
  const { state } = useLocation();
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRevenue = async () => {
    setLoading(true);
    const res = await api.get("/api/v1/revenue/allUsersRevenue");
    setLoading(false);
    res.data.filter((item) => {
      if (state.data.user._id == item.user) {
        setReports(item.packagesRevenue);
        return item;
      }
    })
    setLoading();
  };

  useEffect(() => {
    getRevenue();
  }, []);

  return (
    <div>
      <Header title="Revenue Report" />
      <div className="users-add-btn-wrapper">
        <div className="sales-representative">
          {state.data.user.firstName}
        </div>
      </div>
      <RevenueTable tours={reports} loading={loading} />
    </div>
  )
}

export default RevenueReport;