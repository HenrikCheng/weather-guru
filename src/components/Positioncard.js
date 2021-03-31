import "./styles.css";
import Loader from "./Loader";

const PositionCard = (props) => {
  const { lon, lat, data, onClickHandler } = props;
  console.log("position card" + props);
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{data.timezone}</h5>
          {lon && lat ? (
            <>
              <div>Latitude: {Math.round(lat * 1000) / 1000}</div>
              <div>Longitude: {Math.round(lon * 1000) / 1000}</div>
            </>
          ) : (
            <Loader />
          )}
          <button onClick={onClickHandler} className="btn btn-primary">
            Refresh
          </button>
        </div>
      </div>
    </>
  );
};

export default PositionCard;
