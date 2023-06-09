import React from "react";
import {
  Header,
  SalesAnalysisCard,
  EmployesRecordTable,
  ToursCard,
  LineChart,
  Calander,
} from "../components";

import "../styles/Home.css";

const Home = () => {
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
          <EmployesRecordTable />
          <div className="horizontal-border" />
          <div>
            <div className="viewl-all-tours-wrapper">
              <div className="radio-button-container">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDisabled"
                    id="flexRadioDisabled"
                  />
                  <label
                    class="form-check-label radio-button-label"
                    for="flexRadioDisabled">
                    Active Tours(3)
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDisabled"
                    id="flexRadioCheckedDisabled"
                    checked
                  />
                  <label
                    class="form-check-label radio-button-label"
                    for="flexRadioCheckedDisabled">
                    Upcoming Tours
                  </label>
                </div>
              </div>
              <a href="#" className="view-all-tours">
                Viewl All
              </a>
            </div>
            <div className="scroll-wrapper">
              <div className="tour-card-wrapper">
                <ToursCard />
                <ToursCard />
                <ToursCard />
                <ToursCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
