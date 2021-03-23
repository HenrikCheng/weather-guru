import "./App.css";
import React, { useEffect, useState } from "react";
import Weather from "./components/weather";

function App() {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log("Latitude is:", lat);
    console.log("Longitude is:", long);
  }, [lat, long]);

  const getWeather = async (lat, long) => {
    await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly&appid=cd23d653ce8d3a3cfbbdcacad590ce4d`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(result);
      });
  };

  useEffect(() => {
    getWeather(lat, long);
  }, [lat, long]);

  return (
    <div className="App">
      <h1>Your position is:</h1>
      {long && lat ? (
        <p>
          Lat: {lat} <br /> long: {long}
        </p>
      ) : (
        <div className="loaderContainer">
          <span>Getting your data</span>
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        </div>
      )}
      <button onClick={getWeather}>Refresh</button>
      <Weather weatherData={data} />
    </div>
  );
}

export default App;
