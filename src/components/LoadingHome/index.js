import React from "react";
import style from "./index.css";
import MultipleStyle from "classnames";
const LoadingHome = props => {
  return (
    <div className={style.loading}>
      <div className={style.skCubeGrid}>
        <div className={MultipleStyle(style.skCube, style.skCube1)} />
        <div className={MultipleStyle(style.skCube, style.skCube2)} />
        <div className={MultipleStyle(style.skCube, style.skCube3)} />
        <div className={MultipleStyle(style.skCube, style.skCube4)} />
        <div className={MultipleStyle(style.skCube, style.skCube5)} />
        <div className={MultipleStyle(style.skCube, style.skCube6)} />
        <div className={MultipleStyle(style.skCube, style.skCube7)} />
        <div className={MultipleStyle(style.skCube, style.skCube8)} />
        <div className={MultipleStyle(style.skCube, style.skCube9)} />
      </div>
    </div>
  );
};
export default LoadingHome;
