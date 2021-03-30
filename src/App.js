import "./App.css";
import React, { useEffect, useState } from "react";
import Loader from "./components/loader";

function App() {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [data, setData] = useState([]);
  const [isLoadingGPS, setisLoadingGPS] = useState(true);
  const [isLoadingWeatherdata, setIsLoadingWeatherdata] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    setisLoadingGPS(false);
  }, []);

  useEffect(() => {
    if (isLoadingGPS === false) {
      getWeather(lat, long);
    }
  }, [long]); //lat should be here also but long is checked last

  const getWeather = async (lat, long) => {
    await fetch(
      `${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${long}&units=metric&exclude=minutely,hourly&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(result);
      })
      setIsLoadingWeatherdata(false)
  };

  const onClickHandler = () => getWeather(lat, long);

  return (
    <div className="App">
      <h1>Your position is:</h1>
      {long && lat ? (
        <p>
          Lat: {Math.round(lat * 1000) / 1000} <br /> long: {Math.round(long * 1000) / 1000}
        </p>
      ) : (
        <Loader />
      )}
      <button onClick={onClickHandler}>Refresh</button>
      Location: {data.timezone}
      <div>Current weather: {!isLoadingWeatherdata && data.current.temp}</div>
      {/* <div>Future weather: {data.map(data => {
        return <div>{data.current}</div>
      })}</div> */}
    </div>
  );
}

export default App;
