import React from "react";

import "./Details.css";

export default function Details() {
  let weatherData = {
    feelsLike: "9",
    humidty: "53",
    wind: "8",
  };
  return (
    <div className="Details">
      <div className="col">
        <div className="row">
          <div className="col">
            <h5>Details</h5>
            <hr />
          </div>
          <div className="row details">
            <div className="col-8">
              <p>Feels Like</p>
            </div>
            <div className="col-4">
              <p>{weatherData.feelsLike}°C</p>
            </div>
            <div className="col-8">
              <p>Humidty</p>
            </div>
            <div className="col-4">
              <p>{weatherData.humidty}%</p>
            </div>
            <div className="col-8">
              <p>Wind</p>
            </div>
            <div className="col-4">
              <p>{weatherData.wind}m/s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
