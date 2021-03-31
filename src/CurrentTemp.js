import React from "react";
import Details from "./Details";
import "./CurrentTemp.css";

export default function CurrentTemp() {
  let weatherData = {
    temp: "9",
    minTemp: "8",
    maxTemp: "10",
  };
  return (
    <div className="CurrentTemp">
      <div className="row">
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col">
                <h4>{weatherData.temp}°C</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-4 current-temps">
                <p>{weatherData.minTemp}°C</p>
              </div>
              <div className="col-4 current-temps">
                <p>|</p>
              </div>
              <div className="col-4 current-temps">
                <p className="max-temp">{weatherData.maxTemp}°C</p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <Details />
          </div>
        </div>
      </div>
    </div>
  );
}
