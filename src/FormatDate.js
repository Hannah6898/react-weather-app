import React from "react";

export default function FormatDate(props) {
  console.log(props.date);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let day = days[date.getDay()];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[date.getMonth()];
  let todayDate = date.getDate();
  return (
    <div>
      {day} {todayDate} {month}
    </div>
  );
}
