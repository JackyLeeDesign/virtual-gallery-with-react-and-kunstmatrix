import React from "react";
import style from "./index.css";
import MultipleStyle from "classnames";
const Card = props => {
  const { cardStyle, clickFnc } = props;
  return (
    <div
      className={MultipleStyle(style.cardDefault, cardStyle)}
      onClick={clickFnc}
    />
  );
};
export default Card;
