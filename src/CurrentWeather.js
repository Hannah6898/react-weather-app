import React, { useState } from "react";
import sun from "./sun.png";
import axios from "axios";

import CurrentTemp from "./CurrentTemp";

import "./CurrentWeather.css";
export default function CurrentWeather() {
  const [city, onCity] = useState(null);
  const [cityUpdate, onCityUpdate] = useState(null);
  const [description, onDescription] = useState(null);

  let weatherData = {
    date: "Thur 11 Mar",
    time: "19:00",
  };

  function showLocationInfo(response) {
    console.log(response.data.weather[0].description);
    onCityUpdate(response.data.name);
    onDescription(response.data.weather[0].description);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "9949a4027ac8b116bb6aff55d501ba46";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showLocationInfo);
  }

  function updateCity(event) {
    onCity(event.target.value);
  }

  //When the city name is submit the date, time and weather description change

  return (
    <div className="CurrentWeather">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3 search-bar">
          <input
            id="city-text"
            type="search"
            className="form-control"
            placeholder="City"
            autoComplete="off"
            onChange={updateCity}
          />
          <div className="search-btn">
            <button
              className="btn btn-outline-secondary"
              type="sumbit"
              id="Search-btn"
            >
              Search
            </button>
          </div>
          <div className="current-btn">
            <button id="current-location" className="btn current-location">
              Current <br /> Location
            </button>
          </div>
        </div>

        <h1>{weatherData.date}</h1>
        <div className="Location">
          <div className="city-name">
            <i className="fas fa-map-marker-alt"></i>
            <span> </span>
            <h2>{cityUpdate}</h2>
          </div>
        </div>
        <h3>{weatherData.time}</h3>
        <img src={sun} alt="sun" />
        <div className="description">
          <span>{description}</span>
        </div>
        <div className="row">
          <CurrentTemp />
        </div>
      </form>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,128L60,112C120,96,240,64,360,85.3C480,107,600,181,720,186.7C840,192,960,128,1080,106.7C1200,85,1320,107,1380,117.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
