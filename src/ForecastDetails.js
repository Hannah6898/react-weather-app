import React from "react";
import sun from "./sun.png";

import "./ForecastDetails.css";

export default function ForecastDetails(props) {
  return (
    <div className="col-2 ForecastDetails">
      <div className="row">
        <div className="col-12">
          <p>{props.day}</p>
        </div>
        <div className="col-12">
          <div className="CurrentWeatherIcon">
            <img src={sun} alt="sun" />
          </div>
        </div>
        <div className="col-12">
          <p className="temp">
            {props.minTemp}°|{props.maxTemp}°
          </p>
        </div>
      </div>
    </div>
  );
}
