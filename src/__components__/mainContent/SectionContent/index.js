import React from "react";
import style from "./index.css";
import MultipleStyle from "classnames";

const SectionContent = props => {
  return (
    <div className={style.section}>
      <div className={style.titleArea}>
        <span className={MultipleStyle(props.TextCss, style.TitleText)}>
          {props.Title}
        </span>
      </div>
      <div className={style.hrdiv} />
      <div className={style.ContainText}>{props.children}</div>
    </div>
  );
};
export default SectionContent;
