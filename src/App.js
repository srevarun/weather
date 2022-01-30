import "./App.css";
import { useState } from "react";
import React from "react";

function App() {
  const [query, setQuery] = useState("");
  const api = {
    key: "302e532a64d5a4e1e2211e4b366b22e4",
    base: "https://api.openweathermap.org/data/2.5/weather",
  };
  const [weather,setWeather] = useState({});

  const search  = (e) => {
    if(e.key === "Enter")
    {
      fetch(`${api.base}?q=${query}&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(result => setWeather(result));
      console.log(weather);
    }
  }

  const setValue = (e) => {
    if (e.key == "Enter") {
      setQuery(e.target.value);
      console.log(e.target.value);
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className={typeof weather.main != "undefined" ? ((weather.main.temp> 16 ) ? "app-warm":"app") : "app"}>
      <main>
        <div className="search-box">
          <input
            input="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress = {search}
            
            /> </div>
          {(typeof weather.main != "undefined") ? (
        
        <div>
        <div className="location-box">
          <div className="location">{weather.name},{weather.sys.country}</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className = "temp">{Math.round(weather.main.temp)} c</div>
          <div className = "weather">{weather.weather[0].main}</div>
        </div>
      </div>) : ('')}
      </main>
    </div>
  );
}

export default App;
