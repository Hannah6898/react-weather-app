import React, { useState } from "react";
import ForecastDetails from "./ForecastDetails";

import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <ForecastDetails data={forecast[1]} />
          <ForecastDetails data={forecast[2]} />
          <ForecastDetails data={forecast[3]} />
          <ForecastDetails data={forecast[4]} />
          <ForecastDetails data={forecast[5]} />
        </div>
      </div>
    );
  } else {
    let apiKey = "b79b0225475a81e40d7c313bd2945286";

    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
