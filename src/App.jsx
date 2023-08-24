import { useState } from "react";
import axios from 'axios';

import "../src/app.scss";



export default function App() {
  const [data,setData] = useState({});
  const[location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=568ba25fb7a27e3b81e5a643039c9de0`;
  
  const searchLocation = (event) => {
    if(event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      setLocation('');
    }
  }

  return (


    <div className="app">
      <div className="search">
        <input 
        className="locationInput"
        value={location} 
        onChange={event => setLocation(event.target.value)}
        onKeyDown={searchLocation}
        placeholder='Enter a location'
        type="text"/>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
          {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p>: null}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°c</p> : null }
            <p>Feels Like</p>
          </div>
          <div className="humidy">
            {data.main ? <p className="bold">{data.main.humidity.toFixed()}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed.toFixed()}km</p> : null }
            <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

