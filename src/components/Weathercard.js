import "./styles.css";
import WeatherEmoji from "./WeatherEmoji";

const Weathercard = (props) => {
  const { data, isLoadingWeatherdata } = props;
  return (
    <div className="card">
      <div className="card-body pt-1">
        <h5 className="card-title d-flex align-items-center justify-content-between mb-0">
          Right now
          {!isLoadingWeatherdata && (
            <WeatherEmoji weatherDescription={data.current.weather[0]} />
          )}
        </h5>
        <p className="card-title">
          {!isLoadingWeatherdata && (
            <>
              🌡{" "}
              {data.current.temp +
                " °C. " +
                data.current.weather[0].description +
                "."}
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
            new Date(data.current.sunrise * 1000).toLocaleTimeString()}
        </p>
        <p className="card-text">
          🌇 Sunset:{" "}
          {!isLoadingWeatherdata &&
            new Date(data.current.sunset * 1000).toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};

export default Weathercard;
