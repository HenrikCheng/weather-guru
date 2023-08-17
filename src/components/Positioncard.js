import "./styles.css";
import Loader from "./Loader";
import UseWeekday from "../hooks/useWeekday";

const PositionCard = (props) => {
  const { lon, lat, data } = props;
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{data.timezone}</h5>
          {lon && lat ? (
            <div>
              <p className="card-text">{new Date().toString()}</p>
              <p className="card-text">{UseWeekday(new Date())}</p>
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
