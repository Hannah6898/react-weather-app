import React from "react";
import ForecastDetails from "./ForecastDetails";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <ForecastDetails day={"Fri"} minTemp={12} maxTemp={20} />
        <ForecastDetails day={"Sat"} minTemp={15} maxTemp={19} />
        <ForecastDetails day={"Sun"} minTemp={9} maxTemp={13} />
        <ForecastDetails day={"Mon"} minTemp={14} maxTemp={18} />
        <ForecastDetails day={"Tue"} minTemp={16} maxTemp={25} />
      </div>
    </div>
  );
}
