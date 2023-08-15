import "./styles.css";
import WeatherEmoji from "./WeatherEmoji";

const Weathercard = (props) => {
  const { data, isLoadingWeatherdata } = props;

  const TemperatureSection = () => {
    if (typeof data.temp === "number") {
      return (
        <>
          {data.temp} °C. {data.weather[0].description}.
        </>
      );
    } else if (typeof data.temp === "object") {
      return (
        <>
          {Object.entries(data.temp).map(([time, temp]) => (
            <div key={time}>
              Time: {time}, Temperature: {temp} °C
            </div>
          ))}
        </>
      );
    }
  };

  if (isLoadingWeatherdata) {
    return <></>;
  }

  if (!data) {
    return <></>;
  }

  return (
    <div className="card">
      <div className="card-body pt-1">
        <h5 className="card-title d-flex align-items-center justify-content-between mb-0">
          Right now
          <WeatherEmoji weatherDescription={data.weather[0]} />
        </h5>
        <p className="card-title">
          🌡 <TemperatureSection />
        </p>
        <p className="card-text">😌 Feels like: {data.feels_like + " °C"}</p>
        <p className="card-text">🌊 Humidity: {data.humidity + " %"}</p>
        <p className="card-text">
          🌅 Sunrise: {new Date(data.sunrise * 1000).toLocaleTimeString()}
        </p>
        <p className="card-text">
          🌇 Sunset: {new Date(data.sunset * 1000).toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};

export default Weathercard;
