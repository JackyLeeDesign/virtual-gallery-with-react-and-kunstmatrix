import React from "react";
import style from "./index.css";
const Kalimba = (props) => {
  const { musicStore } = props;
  function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array(
      "Android",
      "iPhone",
      "SymbianOS",
      "Windows Phone",
      "iPad",
      "iPod"
    );
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  }
  return IsPC() ? (
    <div className={style.kalimbaContainer}>
      <div className={style.kalimbaBlack}></div>
      <div
        id="D6"
        className={`${style.kalimbaBtn} ${style.kalimbaD6}`}
        onMouseDown={() => musicStore.mouseDown("D6")}
        onMouseUp={() => musicStore.mouseUp("D6")}
      >
        <p>。</p>
        <p>。</p>2
      </div>
      <div
        id="B5"
        className={`${style.kalimbaBtn} ${style.kalimbaB5}`}
        onMouseDown={() => musicStore.mouseDown("B5")}
        onMouseUp={() => musicStore.mouseUp("B5")}
      >
        <p>　</p>
        <p>。</p>7
      </div>
      <div
        id="G5"
        className={`${style.kalimbaBtn} ${style.kalimbaG5}`}
        onMouseDown={() => musicStore.mouseDown("G5")}
        onMouseUp={() => musicStore.mouseUp("G5")}
      >
        <p>　</p>
        <p>。</p>5
      </div>
      <div
        id="E5"
        className={`${style.kalimbaBtn} ${style.kalimbaE5}`}
        onMouseDown={() => musicStore.mouseDown("E5")}
        onMouseUp={() => musicStore.mouseUp("E5")}
      >
        <p>　</p>
        <p>。</p>3
      </div>
      <div
        id="C5"
        className={`${style.kalimbaBtn} ${style.kalimbaC5}`}
        onMouseDown={() => musicStore.mouseDown("C5")}
        onMouseUp={() => musicStore.mouseUp("C5")}
      >
        <p>　</p>
        <p>。</p>1
      </div>
      <div
        id="A4"
        className={`${style.kalimbaBtn} ${style.kalimbaA4}`}
        onMouseDown={() => musicStore.mouseDown("A4")}
        onMouseUp={() => musicStore.mouseUp("A4")}
      >
        <p>　</p>
        <p>　</p>6
      </div>
      <div
        id="F4"
        className={`${style.kalimbaBtn} ${style.kalimbaF4}`}
        onMouseDown={() => musicStore.mouseDown("F4")}
        onMouseUp={() => musicStore.mouseUp("F4")}
      >
        <p>　</p>
        <p>　</p>4
      </div>
      <div
        id="D4"
        className={`${style.kalimbaBtn} ${style.kalimbaD4}`}
        onMouseDown={() => musicStore.mouseDown("D4")}
        onMouseUp={() => musicStore.mouseUp("D4")}
      >
        <p>　</p>
        <p>　</p>2
      </div>
      <div
        id="C4"
        className={`${style.kalimbaBtn} ${style.kalimbaC4}`}
        onMouseDown={() => musicStore.mouseDown("C4")}
        onMouseUp={() => musicStore.mouseUp("C4")}
      >
        <p>　</p>
        <p>　</p>1
      </div>
      <div
        id="E4"
        className={`${style.kalimbaBtn} ${style.kalimbaE4}`}
        onMouseDown={() => musicStore.mouseDown("E4")}
        onMouseUp={() => musicStore.mouseUp("E4")}
      >
        <p>　</p>
        <p>　</p>3
      </div>
      <div
        id="G4"
        className={`${style.kalimbaBtn} ${style.kalimbaG4}`}
        onMouseDown={() => musicStore.mouseDown("G4")}
        onMouseUp={() => musicStore.mouseUp("G4")}
      >
        <p>　</p>
        <p>　</p>5
      </div>
      <div
        id="B4"
        className={`${style.kalimbaBtn} ${style.kalimbaB4}`}
        onMouseDown={() => musicStore.mouseDown("B4")}
        onMouseUp={() => musicStore.mouseUp("B4")}
      >
        <p>　</p>
        <p>　</p>7
      </div>
      <div
        id="D5"
        className={`${style.kalimbaBtn} ${style.kalimbaD5}`}
        onMouseDown={() => musicStore.mouseDown("D5")}
        onMouseUp={() => musicStore.mouseUp("D5")}
      >
        <p>　</p>
        <p>。</p>2
      </div>
      <div
        id="F5"
        className={`${style.kalimbaBtn} ${style.kalimbaF5}`}
        onMouseDown={() => musicStore.mouseDown("F5")}
        onMouseUp={() => musicStore.mouseUp("F5")}
      >
        <p>　</p>
        <p>。</p>4
      </div>
      <div
        id="A5"
        className={`${style.kalimbaBtn} ${style.kalimbaA5}`}
        onMouseDown={() => musicStore.mouseDown("A5")}
        onMouseUp={() => musicStore.mouseUp("A5")}
      >
        <p>　</p>
        <p>。</p>6
      </div>
      <div
        id="C6"
        className={`${style.kalimbaBtn} ${style.kalimbaC6}`}
        onMouseDown={() => musicStore.mouseDown("C6")}
        onMouseUp={() => musicStore.mouseUp("C6")}
      >
        <p>。</p>
        <p>。</p>1
      </div>
      <div
        id="E6"
        className={`${style.kalimbaBtn} ${style.kalimbaE6}`}
        onMouseDown={() => musicStore.mouseDown("E6")}
        onMouseUp={() => musicStore.mouseUp("E6")}
      >
        <p>。</p>
        <p>。</p>3
      </div>
    </div>
  ) : (
    <div className={style.kalimbaContainer}>
      <div className={style.kalimbaBlack}></div>
      <div
        id="D6"
        className={`${style.kalimbaBtn} ${style.kalimbaD6}`}
        onTouchStart={() => musicStore.mouseDown("D6")}
        onTouchEnd={() => musicStore.mouseUp("D6")}
      >
        <p>。</p>
        <p>。</p>2
      </div>
      <div
        id="B5"
        className={`${style.kalimbaBtn} ${style.kalimbaB5}`}
        onTouchStart={() => musicStore.mouseDown("B5")}
        onTouchEnd={() => musicStore.mouseUp("B5")}
      >
        <p>　</p>
        <p>。</p>7
      </div>
      <div
        id="G5"
        className={`${style.kalimbaBtn} ${style.kalimbaG5}`}
        onTouchStart={() => musicStore.mouseDown("G5")}
        onTouchEnd={() => musicStore.mouseUp("G5")}
      >
        <p>　</p>
        <p>。</p>5
      </div>
      <div
        id="E5"
        className={`${style.kalimbaBtn} ${style.kalimbaE5}`}
        onTouchStart={() => musicStore.mouseDown("E5")}
        onTouchEnd={() => musicStore.mouseUp("E5")}
      >
        <p>　</p>
        <p>。</p>3
      </div>
      <div
        id="C5"
        className={`${style.kalimbaBtn} ${style.kalimbaC5}`}
        onTouchStart={() => musicStore.mouseDown("C5")}
        onTouchEnd={() => musicStore.mouseUp("C5")}
      >
        <p>　</p>
        <p>。</p>1
      </div>
      <div
        id="A4"
        className={`${style.kalimbaBtn} ${style.kalimbaA4}`}
        onTouchStart={() => musicStore.mouseDown("A4")}
        onTouchEnd={() => musicStore.mouseUp("A4")}
      >
        <p>　</p>
        <p>　</p>6
      </div>
      <div
        id="F4"
        className={`${style.kalimbaBtn} ${style.kalimbaF4}`}
        onTouchStart={() => musicStore.mouseDown("F4")}
        onTouchEnd={() => musicStore.mouseUp("F4")}
      >
        <p>　</p>
        <p>　</p>4
      </div>
      <div
        id="D4"
        className={`${style.kalimbaBtn} ${style.kalimbaD4}`}
        onTouchStart={() => musicStore.mouseDown("D4")}
        onTouchEnd={() => musicStore.mouseUp("D4")}
      >
        <p>　</p>
        <p>　</p>2
      </div>
      <div
        id="C4"
        className={`${style.kalimbaBtn} ${style.kalimbaC4}`}
        onTouchStart={() => musicStore.mouseDown("C4")}
        onTouchEnd={() => musicStore.mouseUp("C4")}
      >
        <p>　</p>
        <p>　</p>1
      </div>
      <div
        id="E4"
        className={`${style.kalimbaBtn} ${style.kalimbaE4}`}
        onTouchStart={() => musicStore.mouseDown("E4")}
        onTouchEnd={() => musicStore.mouseUp("E4")}
      >
        <p>　</p>
        <p>　</p>3
      </div>
      <div
        id="G4"
        className={`${style.kalimbaBtn} ${style.kalimbaG4}`}
        onTouchStart={() => musicStore.mouseDown("G4")}
        onTouchEnd={() => musicStore.mouseUp("G4")}
      >
        <p>　</p>
        <p>　</p>5
      </div>
      <div
        id="B4"
        className={`${style.kalimbaBtn} ${style.kalimbaB4}`}
        onTouchStart={() => musicStore.mouseDown("B4")}
        onTouchEnd={() => musicStore.mouseUp("B4")}
      >
        <p>　</p>
        <p>　</p>7
      </div>
      <div
        id="D5"
        className={`${style.kalimbaBtn} ${style.kalimbaD5}`}
        onTouchStart={() => musicStore.mouseDown("D5")}
        onTouchEnd={() => musicStore.mouseUp("D5")}
      >
        <p>　</p>
        <p>。</p>2
      </div>
      <div
        id="F5"
        className={`${style.kalimbaBtn} ${style.kalimbaF5}`}
        onTouchStart={() => musicStore.mouseDown("F5")}
        onTouchEnd={() => musicStore.mouseUp("F5")}
      >
        <p>　</p>
        <p>。</p>4
      </div>
      <div
        id="A5"
        className={`${style.kalimbaBtn} ${style.kalimbaA5}`}
        onTouchStart={() => musicStore.mouseDown("A5")}
        onTouchEnd={() => musicStore.mouseUp("A5")}
      >
        <p>　</p>
        <p>。</p>6
      </div>
      <div
        id="C6"
        className={`${style.kalimbaBtn} ${style.kalimbaC6}`}
        onTouchStart={() => musicStore.mouseDown("C6")}
        onTouchEnd={() => musicStore.mouseUp("C6")}
      >
        <p>。</p>
        <p>。</p>1
      </div>
      <div
        id="E6"
        className={`${style.kalimbaBtn} ${style.kalimbaE6}`}
        onTouchStart={() => musicStore.mouseDown("E6")}
        onTouchEnd={() => musicStore.mouseUp("E6")}
      >
        <p>。</p>
        <p>。</p>3
      </div>
    </div>
  );
};
export default Kalimba;
