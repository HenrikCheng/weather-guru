import React from "react";
import "./styles.css";

const Weathercard = (weatherData) => {
  const { timezone } = weatherData;
  console.log("props is:" + JSON.stringify(weatherData));
  const text = JSON.stringify(weatherData);

  // console.log("total " + keys.length + " keys: " + keys);

  // var myObject = JSON.parse(props);
  // console.log("myobject" + myObject);

  return <div>weather {timezone}</div>;
  // return <div className="">{JSON.stringify(weatherData)}</div>;
};

export default Weathercard;
