import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Header,
  SalesAnalysisCard,
  EmployesRecordTable,
  ToursCard,
  LineChart,
  Calander,
} from "../components";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import api from "../Services/Apis";

const Home = () => {
  const navigate = useNavigate();
  
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tourOption, setTourOption] = useState("Active")

  const [tours, setTours] = useState([]);
  const [activeTours, setActiveTours] = useState([]);
  const [upComingTours, setUpComingTours] = useState([]);


  const getTours = async () => {
    const res = await api.get("/api/v1/package");
    setTours(res.data);
    console.log("res tour", res.data)
    const activeTours = res.data.filter((tour) => {
      return tour.upComing === false;
    });
    const upComingTours = res.data.filter((tour) => {
      return tour.upComing === true;
    });
    setActiveTours(activeTours);
    setUpComingTours(upComingTours);
  };

  const getUsers = async () => {
    setLoading(true);
    const res = await api.get("/api/v1/revenue/allUser");
    console.log("res", res)
    setLoading(false);
    setUsers(res.data);
    setLoading();
  };

  const onOptionChange = e => {
    setTourOption(e.target.value)
  }

  useEffect(() => {
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
            <div className="col-6 ">
              <SalesAnalysisCard />
              <SalesAnalysisCard />
              <SalesAnalysisCard />
            </div>
            <div className="col-6">
              <Calander />
            </div>
            <LineChart />
          </div>
        </div>
        <div className="col-6">
          <div className="sales-analysis-heading">Employees Record</div>
          <EmployesRecordTable users={users} />
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
                    Upcoming Tours
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
              {/* <Link to="/tours">
                <button className="view-all-tours">Viewl All</button>
              </Link> */}
            </div>
            <div className="scroll-wrapper">
              <div className="tour-card-wrapper">
                {tourOption === "Active" ? activeTours?.map((item) => {

                  return <ToursCard item={item} />
                }) : upComingTours?.map((item) => {
                  return <ToursCard item={item} />
                })}

                {/* <ToursCard />
                <ToursCard />
                <ToursCard /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
