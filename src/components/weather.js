import React from "react";
import "./styles.css";

const weather = (props) => {
  console.log("props is:" + JSON.stringify(props));
  return (
    <div className="">
      Location: {JSON.stringify(props)}
      Weather:
    </div>
  );
};

export default weather;
