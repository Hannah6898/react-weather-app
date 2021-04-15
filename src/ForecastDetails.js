import React from "react";
import sun from "./sun.png";

import "./ForecastDetails.css";

export default function ForecastDetails(props) {
  function minTemp() {
    let tempMin = Math.round(props.data.temp.min);
    return `${tempMin}`;
  }

  function maxTemp() {
    let tempMax = Math.round(props.data.temp.max);
    return `${tempMax}`;
  }

  function date() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return `${day}`;
  }

  let iconCode = props.data.weather[0].icon;
  let weatherIcon = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="col-2 ForecastDetails">
      <div className="row">
        <div className="col-12">
          <p>{date()}</p>
        </div>
        <div className="col-12">
          <div className="CurrentWeatherIcon">
            <img src={weatherIcon} alt="icon" />
          </div>
        </div>
        <div className="col-12">
          <p className="temp">
            {minTemp()}°| {maxTemp()}°
          </p>
        </div>
      </div>
    </div>
  );
}
