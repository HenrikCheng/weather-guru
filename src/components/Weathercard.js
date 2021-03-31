import "./styles.css";
import WeatherEmoji from "./WeatherEmoji";

const Weathercard = (props) => {
  const { data, isLoadingWeatherdata } = props;
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Right now</h5>
        <p className="card-title">
          {!isLoadingWeatherdata && (
            <>
              <WeatherEmoji
                weatherDescription={data.current.weather[0].description}
              />
              {data.current.temp + " °C. " + data.current.weather[0].description}
            </>
          )}
        </p>
        <p className="card-text">
          😌 Feels like:{" "}
          {!isLoadingWeatherdata && data.current.feels_like + " °C"}
        </p>
        <p className="card-text">
          🌊 Humidity: {!isLoadingWeatherdata && data.current.humidity + " %"}
        </p>
        <p className="card-text">
          🌅 Sunrise:{" "}
          {!isLoadingWeatherdata &&
            new Date(data.current.sunrise * 1000).toLocaleTimeString() +
              " o'clock"}
        </p>
        <p className="card-text">
          🌇 Sunset:{" "}
          {!isLoadingWeatherdata &&
            new Date(data.current.sunset * 1000).toLocaleTimeString() +
              " o'clock"}
        </p>
        {/* <button href="#" className="btn btn-primary">
          Refresh
        </button> */}
      </div>
    </div>
  );
};

export default Weathercard;
