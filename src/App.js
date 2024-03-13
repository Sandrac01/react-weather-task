import React from "react";
import WeatherSearch from "./WeatherSearch";
import './Search.css';

function App() {
  return (
    <div className="weather-app">
      <header>
      </header>
  <WeatherSearch />
      <main>
        <div class="weather-app-data" />
          
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
          href="https://github.com/Sandrac01/react-weather-task"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
        and
        <a
          href="https://wonderful-cactus-c0504d.netlify.app/"
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
