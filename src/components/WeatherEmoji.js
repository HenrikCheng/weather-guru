import "./styles.css";

const WeatherEmoji = (props) => {
  const { weatherDescription } = props;

  const EmojiSelector = (weatherDescription) => {
    switch (weatherDescription) {
      case "light rain":
        return (
          <span role="img" aria-label="light rain">
            🌧️
            {" "}
          </span>
        );
      default:
        return <></>;
    }
  };

  console.log(weatherDescription);
  return <>{EmojiSelector(weatherDescription)}</>;
};

export default WeatherEmoji;
