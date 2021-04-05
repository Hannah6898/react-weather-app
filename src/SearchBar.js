import React, { useState } from "react";
import axios from "axios";
import "./CurrentWeather.css";
import CurrentWeather from "./CurrentWeather";

export default function SearchBar(props) {
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultcity);
  const [weatherData, setWeatherData] = useState({});

  function showLocationInfo(response) {
    setReady(true);
    setWeatherData({
      date: new Date(response.data.dt * 1000),
      time: "19:00",
      cityName: response.data.name,
      description: response.data.weather[0].description,
      currentTemp: Math.round(response.data.main.temp),
      minTemp: Math.round(response.data.main.temp_min),
      maxTemp: Math.round(response.data.main.temp_max),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      feelsLike: Math.round(response.data.main.feels_like),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "9949a4027ac8b116bb6aff55d501ba46";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showLocationInfo);
  }

  if (ready) {
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

          <CurrentWeather data={weatherData} />
        </form>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
