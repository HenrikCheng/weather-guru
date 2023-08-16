import "./styles.css";
import Loader from "./Loader1";

const PositionCard = (props) => {
  const { lon, lat, data } = props;
  // Get current date and time
  const currentDate = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  return (
    <div className="card">
      <div className="card-body pt-1">
        <h5 className="card-title d-flex align-items-center justify-content-between mb-0">
          {data.timezone} {formattedDate}
        </h5>
        {data.timezone && lon && lat ? (
          <>
            <div>Timezone: {data.timezone}</div>
            <div>Latitude: {Math.round(lat * 1000) / 1000}</div>
            <div>Longitude: {Math.round(lon * 1000) / 1000}</div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default PositionCard;
