import React from "react";
import './Search.css';

function App() {
  return (
    <div className="weather-app">
      <header>
        <form class="search-form" id="search-form">
          <input
            type="search"
            placeholder="Enter a city.."
            required
            id="search-form-input"
            class="search-form-input"
          />
          <input type="submit" value="Search" class="search-form-button" />
        </form>
      </header>
      <main>
        <div class="weather-app-data">
          <div>
            <div class="weather-app-city" id="city"></div>
            <p class="weather-app-details">
              <span id="time"></span>,<span id="description"></span>
              <br />
              Humidity: <strong id="humidity"></strong>, Wind:
              <strong id="wind-speed"></strong>
            </p>
          </div>
          <div class="weather-app-temperature-container">
            <div id="icon"></div>
            <div class="weather-app-temperature" id="temperature"></div>
            <div class="weather-app-unit">°C</div>
          </div>
        </div>
        <div class="weather-forecast" id="forecast"></div>
      </main>

      <footer>
        This project was coded by
        <a
          href="https://github.com/Sandrac01/"
          target="_blank"
          rel="noreferrer"
        >
          Sandra Chinouya
        </a>
        , is
        <a
          href="https://github.com/Sandrac01/"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
        and
        <a
          href="https://github.com/Sandrac01/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
