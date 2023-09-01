import React, { useEffect, useState } from "react";

import '../styles/RevenueReport.css';
import { Header, RevenueTable } from "../components";
import { useLocation } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import * as moment from 'moment-timezone';
import api from "../Services/Apis";
import { toast } from "react-toastify";

const RevenueReport = () => {
  const { state } = useLocation();
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(moment(new Date()).format("YYYY-MM-DD"));

  const getRevenue = async () => {
    try {
      setLoading(true);
      const userId = state.data.user._id;
      const res = await api.get(`/api/v1/revenue/${userId}?date=${selectedDate}`);
      // toast("", { type: "success" });
      setReports(res.data.packagesRevenue);
      setLoading(false);
    }
    catch (error) {
      setReports([]);
      setLoading(false);
      toast(error?.response?.data?.message[0] || "No Report found", {
        type: "error",
      });
    }
  };

  useEffect(() => {
    getRevenue();
  }, [selectedDate]);


  const handleDateChange = (newDate) => {
    const formatedDate = moment(newDate).format("YYYY-MM-DD");
    setSelectedDate(formatedDate);
  };

  return (
    <div>
      <Header title="Revenue Report" />
      <div className="users-add-btn-wrapper">
        <div className="profile-wraper-data">
          <div className="user-profile-wrapper">
            <img
              src={`https://ui-avatars.com/api/?name=${state?.data?.user?.firstName}`}
              className="admin-profile"
              alt="Avatar"
            />
            <div>
              <div className="user-profile-name">{state.data.user.firstName}</div>
              <div className="user-profile-mail">{state.data.user.email}</div>
            </div>
          </div>
          <div className="user-revenue-detail-div">
            <div className="user-profile-revenue ">Total Revenue :
              <span>{state?.data?.revenue?.totalRevenue}</span>
            </div>
            <div className="user-profile-revenue">Tickets Sold :
              <span>{state.data.revenue?.totalTickets}</span>
            </div>
            <div className="user-profile-revenue">Total Tax :
              <span>{state.data.revenue.totalTaxPrice}</span>
            </div>
          </div>
        </div>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          maxDate={new Date()}
        />
      </div>
      <RevenueTable tours={reports} loading={loading} />
    </div>
  )
}

export default RevenueReport;