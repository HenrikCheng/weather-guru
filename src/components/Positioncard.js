import "./styles.css";
import Loader from "./Loader";
import useWeekday from "../hooks/useWeekday";
import useTime from "../hooks/useTime";

const PositionCard = (props) => {
  const { lon, lat, data } = props;

  const today = new Date();
  const todayWeekday = useWeekday(today);
  const currentTime = useTime();

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{data.timezone}</h5>
          {lon && lat ? (
            <div>
              <p className="card-text">Time: {currentTime}</p>
              <p className="card-text">Weekday: {todayWeekday}</p>
              <p className="card-text">
                Latitude: {Math.round(lat * 1000) / 1000}
              </p>
              <p className="card-text">
                Longitude: {Math.round(lon * 1000) / 1000}
              </p>
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </>
  );
};

export default PositionCard;
