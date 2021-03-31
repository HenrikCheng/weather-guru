import "./App.css";
import React, { useEffect, useState } from "react";
import WeatherCard from "./components/Weathercard";
import PositionCard from "./components/Positioncard";
import PandaLogo from "./images/panda.png";

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
  }, [lon]);

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
    <div className="App bg-secondary">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img
            src={PandaLogo}
            width="30"
            height="30"
            alt=""
            className="pandaLogo"
          />
          <span className="m-3">WeatherPanda</span>
        </a>
      </nav>
      <div className="cardContainer">
        <PositionCard
          lat={lat}
          lon={lon}
          data={data}
          isLoadingGPS={isLoadingGPS}
          onClickHandler={onClickHandler}
        />
        <WeatherCard data={data} isLoadingWeatherdata={isLoadingWeatherdata} />
      </div>
      <div className="cardContainer">
        {/* {!isLoadingWeatherdata &&
          data.daily.forEach((day) => {
            console.log(day);
            <div>Hello World</div>;
          })} */}
        {/* {!isLoadingWeatherdata && data.daily.map((day) => <p>{day.temp}</p>)} */}
        {/* {!isLoadingWeatherdata &&
          data.daily.map((day, index) => <div>{day.temp}</div>)} */}
        {/* {data.daily.map((day) => (
          <div>{day.temp}</div>
        ))} */}
      </div>
    </div>
  );
}

export default App;
