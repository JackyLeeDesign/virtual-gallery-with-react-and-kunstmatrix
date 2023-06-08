import React from "react";
import style from "./index.css";
import PropTypes from "prop-types";
import MultipleStyle from "classnames";
const selectColor = mycolor => {
  switch (mycolor) {
    case "red":
      return style.red;
    case "orange":
      return style.orange;
    case "yellow":
      return style.yellow;
    case "green":
      return style.green;
    case "blue":
      return style.blue;
    case "cyan":
      return style.cyan;
    case "purple":
      return style.purple;
    case "gray":
      return style.gray;
    case "white":
      return style.white;
    case "light":
      return style.light;
    case "dark":
      return style.dark;
    default:
      return style.gray;
  }
};
const BadgeText = props => {
  return (
    <span
      className={MultipleStyle(
        style.badge,
        selectColor(props.color),
        props.className
      )}
      onClick={props.onClick}
    >
      <span className={style.badgeBigText}>{props.title}</span>
      {props.text}
    </span>
  );
};
BadgeText.propTypes = {
  color: PropTypes.string,
  title: PropTypes.node,
  text: PropTypes.string
};
export default BadgeText;
