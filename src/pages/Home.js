import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as moment from 'moment-timezone';
import {
  Header,
  SalesAnalysisCard,
  EmployesRecordTable,
  ToursCard,
  LineChart,
  Calander,
  Loader,
} from "../components";
import "../styles/Home.css";
import api from "../Services/Apis";

import totalRevenueIcon from "../assets/svgs/total-revenue-icon.svg";
import monthlyRevenue from "../assets/svgs/monthly-revenue-icon.svg";
import preDayrevenue from "../assets/svgs/per-day-revenue.svg";

const Home = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tourOption, setTourOption] = useState("Active");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [tours, setTours] = useState([]);
  const [activeTours, setActiveTours] = useState([]);
  const [upComingTours, setUpComingTours] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalRevenuePerDay, setTotalRevenuePerDay] = useState(0);
  const [totalRevenuePerMonth, setTotalRevenuePerMonth] = useState(0);

  const getTours = async () => {
    const res = await api.get("/api/v1/package");
    setTours(res.data);
    const activeTours = res.data.filter((tour) => tour.upComing === false);
    const upComingTours = res.data.filter((tour) => tour.upComing === true);
    setActiveTours(activeTours);
    setUpComingTours(upComingTours);
  };

  const getUsers = async () => {
    setLoading(true);
    const res = await api.get("/api/v1/revenue/allUser");
    setLoading(false);
    setUsers(res.data);
    setLoading();
  };

  const deleteUser = async (id) => {
    try {
      await api.delete(`/api/v1/user/${id}`);
      toast("User deleted successfully", { type: "success" });
      getUsers();
    } catch (error) {
      toast(error.response.data.message || "Failed to login", {
        type: "error",
      });
    }
  };

  const getTotalRevenue = async () => {
    try {
      const res = await api.get(`/api/v1/revenue/filter`);
      const formatedRevenue = formatNumber(res.data.totalRevenue);
      setTotalRevenue(formatedRevenue)
    } catch (error) {
      toast(error.response.data.message || "Something went wrong!", {
        type: "error",
      });
    }
  }

  const getPerDayRevenue = async (date) => {
    try {
      const res = await api.get(`/api/v1/revenue/filter?date=${date}`);
      const formatedRevenue = formatNumber(res.data.totalRevenue);
      setTotalRevenuePerDay(formatedRevenue)
    } catch (error) {
      toast(error.response.data.message || "Something went wrong!", {
        type: "error",
      });
    }
  }

  const getPerMonthRevenue = async (date) => {
    try {
      const res = await api.get(`/api/v1/revenue/filter?month=${date}`);
      const formatedRevenue = formatNumber(res.data.totalRevenue);
      setTotalRevenuePerMonth(formatedRevenue)
    } catch (error) {
      toast(error.response.data.message || "Something went wrong!", {
        type: "error",
      });
    }
  }


  const handleDateChange = date => {
    const formatedDate = moment(date).format("YYYY-MM-DD");
    getPerDayRevenue(formatedDate)
    getPerMonthRevenue(formatedDate)
    setSelectedDate(formatedDate);
  };

  function formatNumber(num) {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num;
  }
  
  const onOptionChange = (e) => {
    setTourOption(e.target.value);
  };

  useEffect(() => {
    handleDateChange(new Date());
    getTotalRevenue();
    getUsers();
    getTours();
  }, []);

  return (
    <div class="home-container">
      <Header title="Overview" />
      <div className="row">
        <div className="col-6 ">
          <div className="sales-analysis-heading">Sales Analysis</div>
          <div className="row  vertical-border">
            <div className="col-6">
              <SalesAnalysisCard
                title="Total Revenue"
                Price={totalRevenue}
                icon={totalRevenueIcon}
              />
              <SalesAnalysisCard
                title="Monthly Revenue"
                Price={totalRevenuePerMonth ? totalRevenuePerMonth : 0}
                icon={monthlyRevenue}
              />
              <SalesAnalysisCard
                title="Per-Day Revenue"
                Price={totalRevenuePerDay ? totalRevenuePerDay : 0}
                icon={preDayrevenue}
              />
            </div>
            <div className="col-6">
              <Calander handleDateChange={handleDateChange} value={selectedDate}/>
            </div>
            <LineChart />
          </div>
        </div>
        <div className="col-6">
          <div className="sales-analysis-heading">Employees Record</div>
          <EmployesRecordTable users={users} loading={loading} deleteUser={deleteUser} />
          <div className="horizontal-border" />
          <div>
            <div className="viewl-all-tours-wrapper">
              <div className="radio-button-container">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    value="Active"
                    name="flexRadioDisabled"
                    id="flexRadioDisabled"
                    checked={tourOption === "Active"}
                    onChange={onOptionChange}
                  />
                  <label
                    class="form-check-label radio-button-label"
                    for="flexRadioDisabled">
                    Active Tours{`(${activeTours.length})`}
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    value="Upcoming"
                    type="radio"
                    name="flexRadioDisabled"
                    id="flexRadioCheckedDisabled"
                    checked={tourOption === "Upcoming"}
                    onChange={onOptionChange}
                  />
                  <label
                    class="form-check-label radio-button-label"
                    for="flexRadioCheckedDisabled">
                    Upcoming Tours{`(${upComingTours.length})`}
                  </label>
                </div>
              </div>
              <button
                className="view-all-tours"
                onClick={() => {
                  navigate("/tours");
                }}>
                View All
              </button>
            </div>
            {!loading ? (
              <div className="scroll-wrapper">
                <div className="tour-card-wrapper">
                  {tourOption === "Active" ? (
                    activeTours.length !== 0 ? (
                      activeTours.map((item) => {
                        return <ToursCard item={item} />;
                      })
                    ) : (
                      <div className="error-message-tours ">
                        No active tours available.
                      </div>
                    )
                  ) : upComingTours.length !== 0 ? (
                    upComingTours.map((item) => {
                      return <ToursCard item={item} />;
                    })
                  ) : (
                    <div className="error-message-tours ">
                      No upcoming tours available.
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="active-and-upcoming-loader">
                <Loader />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
