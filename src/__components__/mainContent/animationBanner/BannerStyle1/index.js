import React from "react";
import style from "./index.css";
import bannerimg from "./assets/banner.png";
import boy1 from "./assets/boy1.png";
import boy2 from "./assets/boy2.png";
import boy3 from "./assets/boy3.png";
import girl1 from "./assets/girl1.png";
import girl2 from "./assets/girl2.png";
import girl3 from "./assets/girl3.png";
import MultipleStyle from "classnames";
const Banner = () => {
  return (
    <div className={MultipleStyle(style.main_banner)}>
      <img className={style.boy_1} src={boy1} />
      <img className={style.boy_2} src={boy2} />
      <img className={style.boy_3} src={boy3} />
      <img className={style.girl_1} src={girl1} />
      <img className={style.girl_2} src={girl2} />
      <img className={style.girl_3} src={girl3} />
      <div className={style.boy_2} />
      <div className={style.boy_3} />
      <div className={style.girl_1} />
      <div className={style.girl_2} />
      <div className={style.girl_3} />
      <img className={style.main_banner_img} src={bannerimg} />
    </div>
  );
};
export default Banner;
