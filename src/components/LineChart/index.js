import React from "react";
import "./style.css";

import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales"],
  ["2015", 20],
  ["2016", 10],
  ["2017", 50],
  ["2018", 15],
  ["2019", 18],
  ["2020", 39],
];
export const options = {
  legend: "none",
  curveType: "function",
  colors: ["#FF5C00"],
  hAxis: {
    textStyle: { color: "#FF5C00" },
  },
  vAxis: {
    textStyle: { color: "#FF5C00" },
  },
};

const LineChart = () => {
  return (
    <div>
      <div className="line-chart-container">
        <div className="sales-container">
          <div className="sales-over-year">Sales Over the Year</div>
          <div className="orange-dot-wrapper">
            <div className="orange-dot" />
            <div className="sold-ticke">Ticket Sold</div>
          </div>
        </div>

        <Chart
          chartType="LineChart"
          data={data}
          options={options}
          className="line-chart"
        />
      </div>
    </div>
  );
};

export default LineChart;
