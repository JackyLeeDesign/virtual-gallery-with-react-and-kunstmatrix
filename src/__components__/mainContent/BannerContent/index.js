import style from "./index.css";
import MultipleStyle from "classnames";
import React from "react";
const ContactInput = props => {
  return (
    <div className={MultipleStyle(style.bannerText, style.fontgood)}>
      {props.contentArray[props.contentNum]}
    </div>
  );
};
export default ContactInput;
