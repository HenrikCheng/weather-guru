import "./styles.css";

const Weathercard = (props) => {
  const { timezone, current } = props;

  // console.log("props is:" + JSON.stringify(weatherData));
  // const text = JSON.stringify(weatherData);

  // console.log("total " + keys.length + " keys: " + keys);

  // var myObject = JSON.parse(props);
  // console.log("myobject" + myObject);

  // return <div>weather {timezone}</div>;
  // return <div className="">{JSON.stringify(weatherData)}</div>;
  return (
    <div className="card">
      <div className="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Weathercard;
