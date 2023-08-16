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

  const isCacheValid = (timestamp) => {
    const currentTime = new Date().getTime();
    const cacheTime = parseInt(timestamp, 10);
    return currentTime - cacheTime < 3600000; // 1 hour in milliseconds
  };

  const getWeather = async (lat, lon) => {
    const cachedData = localStorage.getItem("weatherData");

    if (cachedData) {
      const { timestamp, data: cachedResult } = JSON.parse(cachedData);
      if (isCacheValid(timestamp)) {
        setData(cachedResult);
        setIsLoadingWeatherdata(false);
        return;
      }
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly&appid=${process.env.REACT_APP_API_KEY}`
      );
      const result = await response.json();
      setData(result);

      // Update the cache with the new data and timestamp
      const cacheData = {
        timestamp: new Date().getTime(),
        data: result,
      };
      localStorage.setItem("weatherData", JSON.stringify(cacheData));

      setIsLoadingWeatherdata(false);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setIsLoadingWeatherdata(false);
    }
  };

  const onClickHandler = () => getWeather(lat, lon);

  return (
    <div className="App bg-secondary">
      <nav className="navbar navbar-dark bg-dark">
        <img
          src={PandaLogo}
          width="30"
          height="30"
          alt=""
          className="pandaLogo"
        />
        <span className="m-3 text-light">WeatherPanda</span>
      </nav>
      <div className="cardContainer">
        <PositionCard
          lat={lat}
          lon={lon}
          data={data}
          isLoadingGPS={isLoadingGPS}
          onClickHandler={onClickHandler}
        />
        <WeatherCard
          data={data.current}
          isLoadingWeatherdata={isLoadingWeatherdata}
          isCurrent={true}
        />
        {data &&
          data.daily &&
          data.daily.length > 0 &&
          data.daily.map((day, index) => {
            return (
              <WeatherCard
                data={day}
                isLoadingWeatherdata={isLoadingWeatherdata}
                isCurrent={false}
                key={index}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
