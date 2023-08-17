import "./styles.css";
import Loader from "./Loader1";

const PositionCard = (props) => {
  const { lon, lat, data } = props;

  return (
    <div className="card">
      <div className="card-body pt-1">
        <h5 className="card-title d-flex align-items-center justify-content-between mb-0">
          {data.timezone}
        </h5>
        {lon && lat ? (
          <>
            <div className="card-text">
              Latitude: {Math.round(lat * 1000) / 1000}
            </div>
            <div className="card-text">
              Longitude: {Math.round(lon * 1000) / 1000}
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default PositionCard;
