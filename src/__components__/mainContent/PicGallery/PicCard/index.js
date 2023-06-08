import React from "react";
import style from "./index.css";
import PropTypes from "prop-types";
import MultipleStyle from "classnames";
const PicCard = props => {
  // 按照需求傳入一列要顯示幾個圖片與位移，套用不同style
  // 1,2,3,4,5,6,7,8,9,10,11,12 / 列
  let selectStyle = selectStyle => {
    switch (selectStyle) {
      case 1:
        return style.cardBoxWidth1;
      case 2:
        return style.cardBoxWidth2;
      case 3:
        return style.cardBoxWidth3;
      case 4:
        return style.cardBoxWidth4;
      case 5:
        return style.cardBoxWidth5;
      case 6:
        return style.cardBoxWidth6;
      case 7:
        return style.cardBoxWidth7;
      case 8:
        return style.cardBoxWidth8;
      case 9:
        return style.cardBoxWidth9;
      case 10:
        return style.cardBoxWidth10;
      case 11:
        return style.cardBoxWidth11;
      case 12:
        return style.cardBoxWidth12;
      default:
        return style.cardBoxWidth1;
    }
  };
  return (
    <div className={MultipleStyle(style.cardBox, selectStyle(props.picStyle))}>
      <div className={style.titleBox}>{props.title}</div>
      <div className={style.picBox}>
        <img src={props.pic} />
      </div>
      <div className={style.textBox}>{props.text}</div>
    </div>
  );
};
PicCard.propTypes = {
  pic: PropTypes.string
};
export default PicCard;
