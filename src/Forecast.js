import React, { useState } from "react";
import ForecastDetails from "./ForecastDetails";

import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <ForecastDetails />
          <ForecastDetails />
          <ForecastDetails />
          <ForecastDetails />
          <ForecastDetails />
        </div>
      </div>
    );
  } else {
    let apiKey = "b79b0225475a81e40d7c313bd2945286";
    let units = "metric";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = ` https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}
  `;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
