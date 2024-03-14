import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch(response) {
    const [city, setCity] = useState("");
   const [message, setMessage] = useState("");
   const [weather, setWeather] = useState({});




 
function updateCity(event) {
  setCity(event.target.value);
}

  
function showWeather(response) {
  setWeather({
  temperature: response.data.main.temp,  
wind: response.data.wind.speed,
    humidity: response.data.main.humidity,
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    description: response.data.weather[0].description,
  });

}


function handleSubmit(event) {
  event.preventDefault();
let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
   setCity (`${city}`);
 setMessage(`Tuesday 10:20`);
 
 
}

 
    return (
      <div className="WeatherSearch">
        <form class="search-form" id="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city.."
            required
            id="search-form-input"
            class="search-form-input"
            onChange={updateCity}
          />
          <input type="submit" value="Search" class="search-form-button" />
        </form>
        <h2>{city}</h2>
        <h3>{message}</h3>
        <h4>{weather.description}</h4>
        <span id="description"></span>
        <div className="details d-flex">
          <div className="forecast">
            <span>
              <img src={weather.icon} alt={weather.description} />
            </span>
            <span className="temperature">
             {Math.round(weather.temperature)} °C
            </span>
          </div>
          <div className="humidity-wind">
            <span id="humidity"> Humidity:{weather.humidity}%</span>
            <br />
            <span id="wind"> Wind:{weather.wind}km/h</span>
          </div>
        </div>
        <div className="weather-days-container d-flex mt-5">
          <div class="container">
            <div class="row justify-content-start">
              <div class="col-2">
                <div className="weather-app-days" id="days">
                  {"Sun"}
                </div>
                <div className="weather-app-temperature" id="temperature">
                  {``}
                  <span className="weatehr-app-unit">
                    {Math.round(weather.temperature)}°C
                  </span>
                </div>
                <div className="weather-app-icon" id="icon">
                  {" "}
                  <img src={weather.icon} alt={weather.description} />
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row justify-content-start">
              <div class="col-2">
                <div className="weather-app-days" id="days">
                  {"Mon"}
                </div>
                <div className="weather-app-temperature" id="temperature">
                  {``}

                  <span className="weatehr-app-unit">
                    {Math.round(weather.temperature)}°C
                  </span>
                </div>
                <div className="weather-app-icon" id="icon">
                  {" "}
                  <img src={weather.icon} alt={weather.description} />
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row justify-content-start align-items-start ">
              <div class="col-2">
                <div className="weather-app-days" id="days">
                  {"Tue"}
                </div>
                <div className="weather-app-temperature" id="temperature">
                  {``}

                  <span className="weatehr-app-unit">
                    {Math.round(weather.temperature)}°C
                  </span>
                </div>
                <div className="weather-app-icon" id="icon">
                  {" "}
                  <img src={weather.icon} alt={weather.description} />
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row justify-content-start">
              <div class="col-2">
                <div className="weather-app-days" id="days">
                  {"Wed"}
                </div>
                <div className="weather-app-temperature" id="temperature">
                  {``}

                  <span className="weatehr-app-unit">
                    {Math.round(weather.temperature)}°C
                  </span>
                </div>
                <div className="weather-app-icon" id="icon">
                  {" "}
                  <img src={weather.icon} alt={weather.description} />
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row justify-content-start">
              <div class="col-2">
                <div className="weather-app-days" id="days">
                  {"Thur"}
                </div>
                <div className="weather-app-temperature" id="temperature">
                  {``}
                  <span className="weatehr-app-unit">
                    {Math.round(weather.temperature)}°C
                  </span>{" "}
                </div>
                <div className="weather-app-icon" id="icon">
                  {" "}
                  <img src={weather.icon} alt={weather.description} />
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row justify-content-start">
              <div class="col-2">
                <div className="weather-app-days" id="days">
                  {"Fri"}
                </div>
                <div className="weather-app-temperature" id="temperature">
                  {``}
                  <span className="weatehr-app-unit">
                    {Math.round(weather.temperature)}°C
                  </span>{" "}
                </div>
                <div className="weather-app-icon" id="icon">
                  {" "}
                  <img src={weather.icon} alt={weather.description} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}