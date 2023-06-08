import React from "react";
import style from "./index.css";
import PropTypes from "prop-types";
const PicAndInfo = props => {
  return (
    <div className={style.cardBox}>
      <div className={style.picBox}>
        <img src={props.pic} />
      </div>
      <div className={style.textBox}>
        <div className={style.textBoxdiv}>{props.children}</div>
      </div>
      <div className={style.clear} />
    </div>
  );
};
PicAndInfo.propTypes = {
  pic: PropTypes.string,
  children: PropTypes.node
};
export default PicAndInfo;
