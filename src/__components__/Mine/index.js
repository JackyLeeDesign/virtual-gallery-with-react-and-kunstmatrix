import React, { useState } from "react";
import PersonalCalendar from "./PersonalCalendar";
// import ChatBot from "./ChatBot";
import style from "./index.css";

function Mine() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    const username = "Jacky";
    const password = "0620";
    // 模擬登入成功
    if (username === "Jacky" && password === "0620") {
      setIsLoggedIn(true);
    } else {
      alert("登入失敗，請再試一次。");
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <PersonalCalendar/>
      ) : (
        <div className={style.loginContainer}>
          <label>帳號:</label>
          <input type="text" name="username" />
          <label>密碼:</label>
          <input type="password" name="password" />
          <button onClick={handleLogin}>登入</button>
        </div>
      )}
    </>
  );
}

export default Mine;
