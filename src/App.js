import "./App.css";
import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
import WeatherCard from "./components/Weathercard";
import PositionCard from "./components/Positioncard";

function App() {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [data, setData] = useState([]);
  const [isLoadingGPS, setisLoadingGPS] = useState(true);
  const [isLoadingWeatherdata, setIsLoadingWeatherdata] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
    setisLoadingGPS(false);
  }, []);

  useEffect(() => {
    if (isLoadingGPS === false) {
      getWeather(lat, lon);
    }
  }, [lon]); //lat should be here also but long is checked last

  const getWeather = async (lat, lon) => {
    await fetch(
      `${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(result);
      });
    setIsLoadingWeatherdata(false);
  };

  const onClickHandler = () => getWeather(lat, lon);

  return (
    <div className="App">
      <h1>Your position is: {data.timezone} </h1>
      {lon && lat ? (
        <>
          <div>Latitude: {Math.round(lat * 1000) / 1000}</div>
          <div>Longitude: {Math.round(lon * 1000) / 1000}</div>
        </>
      ) : (
        <Loader />
      )}
      <button onClick={onClickHandler}>Refresh</button>

      <div className="cardContainer">
        <PositionCard
          lat={lat}
          lon={lon}
          data={data}
          isLoadingWeatherdata={isLoadingWeatherdata}
          onClickHandler={onClickHandler}
        />
        <WeatherCard data={data} isLoadingWeatherdata={isLoadingWeatherdata} />
      </div>
    </div>
  );
}

export default App;
