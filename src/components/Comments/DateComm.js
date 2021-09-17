import React from 'react'
import "./DateComm.css";
import {
  timeProcesHouers,
  timeProcesMinutes,
  PM_AM,
} from "../Functions/Functions";
const DateComm = (props) => {
  // define const for months, year, days, hours, minutes using date data from array
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const hour = props.date.getHours();
  const minut = props.date.getMinutes();

  // use function for displayng hour and minutes with 2 digits and assign it to const
  const houers = timeProcesHouers(hour);
  const minutes = timeProcesMinutes(minut);
  return (
    // Return Date element with procesed data from array
    <div className="date">
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{houers} </div>:<div>{minutes}</div>
      {/* function taht check if it is pm or am */}
      <div> {PM_AM(hour)}</div>
    </div>
  );
};

export default DateComm;
