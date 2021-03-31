import "./styles.css";

const WeatherEmoji = (props) => (
  <img
    src={`http://openweathermap.org/img/w/${props.weatherDescription.icon}.png`}
    alt="weather icon"
  />
);

export default WeatherEmoji;
