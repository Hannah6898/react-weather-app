import React, { useState } from "react";
import axios from "axios";
import FormatDate from "./FormatDate";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  const [city, setCity] = useState(null);
  const [weatherData, setWeatherData] = useState({});

  function showLocationInfo(response) {
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
    let apiKey = "9949a4027ac8b116bb6aff55d501ba46";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showLocationInfo);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

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

        <h1>
          <FormatDate date={weatherData.date} />
        </h1>
        <div className="Location">
          <div className="city-name">
            <i className="fas fa-map-marker-alt"></i>
            <span> </span>
            <h2>{weatherData.cityName}</h2>
          </div>
        </div>
        <h3>{weatherData.time}</h3>
        <img src={weatherData.icon} alt={weatherData.description} />
        <div className="description">
          <span>{weatherData.description}</span>
        </div>
        <div className="row">
          <div className="CurrentTemp">
            <div className="row">
              <div className="row">
                <div className="col-6">
                  <div className="row">
                    <div className="col">
                      <h4>{weatherData.currentTemp}°C</h4>
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
                            <p>{weatherData.humidity}%</p>
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
                </div>
              </div>
            </div>
          </div>
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
