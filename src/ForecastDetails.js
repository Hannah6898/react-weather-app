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

  return (
    <div className="col-2 ForecastDetails">
      <div className="row">
        <div className="col-12">
          <p>hi</p>
        </div>
        <div className="col-12">
          <div className="CurrentWeatherIcon">
            <img src={sun} alt="sun" />
          </div>
        </div>
        <div className="col-12">
          <p className="temp">
            {minTemp()}°|{maxTemp()}°
          </p>
        </div>
      </div>
    </div>
  );
}
