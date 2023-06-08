import React from "react";
import style from "./index.css";
import zindex2 from "./assets/zindex2.png";
import blackcloud from "./assets/blackcloud.png";
import cloud1 from "./assets/cloud1.png";
import cloud2 from "./assets/cloud2.png";
import cloud3 from "./assets/cloud3.png";
import car_pink from "./assets/car_pink.png";
import car_blue from "./assets/car_blue.png";
import car_orange from "./assets/car_orange.png";
import car_white from "./assets/car_white.png";
import car_green from "./assets/car_green.png";
import zindex0 from "./assets/zindex0.png";
const Banner = () => {
  return (
    <div className={style.main_banner}>
      <img className={style.main_banner_img2} src={zindex2} />
      <img className={style.blackcloud} src={blackcloud} />
      <img className={style.cloud1} src={cloud1} />
      <img className={style.cloud2} src={cloud2} />
      <img className={style.cloud3} src={cloud3} />
      <img className={style.car_pink} src={car_pink} />
      <img className={style.car_blue} src={car_blue} />
      <img className={style.car_orange} src={car_orange} />
      <img className={style.car_white} src={car_white} />
      <img className={style.car_green} src={car_green} />
      <img className={style.main_banner_img} src={zindex0} />
    </div>
  );
};
export default Banner;
