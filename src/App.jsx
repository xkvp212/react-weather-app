import React from "react";
import "../src/app.scss";



export default function App() {

   // const url = "https://api.openweathermap.org/data/2.5/weather?q=Auckland&appid=568ba25fb7a27e3b81e5a643039c9de0";
  
  return (


    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Auckland</p>
          </div>
          <div className="temp">
            <h1>10°C</h1>
          </div>
          <div className="description">
            <p>Rain</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>9°c</p>
          </div>
          <div className="humidy">
            <p>60%</p>
          </div>
          <div className="wind">
            <p>20km</p>
          </div>
        </div>
      </div>
    </div>
  );
}

