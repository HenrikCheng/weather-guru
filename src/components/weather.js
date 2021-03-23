import React from "react";
import "./styles.css";

const CardExampleCard = (props) => {
  const { timezone } = props;
  console.log("Weatherdata is:" + timezone);
  return <div className="header card">{timezone}</div>;
};

export default CardExampleCard;
