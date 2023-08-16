import "./styles.css";
import WeatherEmoji from "./WeatherEmoji";

const Weathercard = (props) => {
  const { data, isLoadingWeatherdata, isCurrent } = props;

  const TemperatureSection = () => {
    if (isCurrent) {
      return (
        <p>
          {data.temp} °C. {data.weather[0].description}.
        </p>
      );
    } else if (typeof data.temp === "object") {
      return (
        <>
          <h5>🌡 Temperature</h5>
          {Object.entries(data.temp).map(([time, temp]) => (
            <p key={time}>
              Time: {time}, Temperature: {temp} °C
            </p>
          ))}
        </>
      );
    }
  };

  const FeelsLikeSection = () => {
    if (isCurrent) {
      return (
        <p className="card-text">😌 Feels like: {data.feels_like + " °C"}</p>
      );
    } else if (typeof data.feels_like === "object") {
      const orderedKeys = ["morn", "day", "eve", "night"];
      return (
        <div>
          <h5>😌 Feels like</h5>
          {orderedKeys.map((time) => (
            <p key={time}>
              Time: {time.charAt(0).toUpperCase() + time.slice(1)}, Temperature:{" "}
              {data.feels_like[time]} °C
            </p>
          ))}
        </div>
      );
    }
    return <></>;
  };

  if (isLoadingWeatherdata) {
    return <></>;
  }

  if (!data) {
    return <></>;
  }

  return (
    <div className="card" style={{ lineHeight: "75%" }}>
      <div className="card-body pt-1">
        <h5 className="card-title d-flex align-items-center justify-content-between mb-0">
          {isCurrent && <span>Right now</span>}
          <WeatherEmoji weatherDescription={data.weather[0]} />
        </h5>
        {/* <div className="card-title">
          <TemperatureSection />
        </div> */}
        <div className="card-text">
          <FeelsLikeSection />
        </div>
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
