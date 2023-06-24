import React, { useState } from "react";
import "./style.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calander = ({handleDateChange, value}) => {
  // const [value, onChange] = useState(new Date());
  return (
    <div>
      <Calendar onChange={handleDateChange} value={value} />
    </div>
  );
};

export default Calander;
