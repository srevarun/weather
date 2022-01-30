import "./App.css";
import { useState } from "react";
import React from "react";

function App() {
  const [query, setQuery] = useState("");
  const api = {
    key : "302e532a64d5a4e1e2211e4b366b22e4",
    base : "https://api.openweathermap.org/data/2.5/weather"
  
  };
 
  const setValue =(e) => {
    if(e.key == "Enter")
    {
         setQuery(e.target.value); 
         console.log(e.target.value);
    }
  };

  return (
    <div className="app">
     
      <main>
        <div className = "search-box">
          <input 
          input = "text"
          className="search-bar"
          placeholder = "Search..."
          onKeyPress={setValue}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
