import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";
// import "@fullcalendar/list/main.css";
import Datetime from "react-datetime";

import { v4 as uuidv4 } from "uuid";

let url = "https://jackyleeidea-backend.herokuapp.com";

function getData() {
  fetch(url, {
    method: "GET",
    redirect: "follow",
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      setEvents(result);
    })
    .catch((error) => console.log("error", error));
}
const initEvents = getData();

function getDate(dayString) {
  const today = new Date();
  const year = today.getFullYear().toString();
  let month = (today.getMonth() + 1).toString();

  if (month.length === 1) {
    month = "0" + month;
  }
  // console.log(dayString.replace('YEAR', year).replace('MONTH', month))
  return dayString.replace("YEAR", year).replace("MONTH", month);
}
const PersonalCalendar = () => {
  const [events, setEvents] = useState(initEvents);
  const [startTime, setStartTime] = useState("");
  const [title, setTitle] = useState("");

  const newEvents = {
    id: uuidv4(),
    data: [uuidv4(), startTime, title],
  };

  useEffect(() => {
    getData();
  }, []);

  function postData(url, data) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json","Access-Control-Allow-Origin" : "*"},
      body: JSON.stringify(data),
      redirect: "follow",
    };

    fetch(`${url}/addNewEvents`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        getData();
        setStartTime("");
        setTitle("");
      })
      .catch((error) => console.log("error", error));
  }
  function getData() {
    fetch(url, {
      method: "GET",
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setEvents(result);
      })
      .catch((error) => console.log("error", error));
  }
  useEffect(() => {
    console.log(startTime);
  }, [startTime]);
  return (
    <div className="calendarContainer">
      <p>Personal Calendar</p>

      <div>
        <h3>Add events </h3>
        <Datetime
          value={startTime}
          onChange={(date) => {
            setStartTime(date._d);
          }}
          inputProps={{ placeholder: "Select a date and time" }}
        />

        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="title"
        />
        <button
          onClick={() => {
            postData(url, newEvents);
          }}
        >
          OK
        </button>
      </div>
      <FullCalendar
        events={events}
        plugins={[dayGridPlugin]}
        height="500px"
        eventClick={function (arg) {
          alert(arg.event.title);
          alert(arg.event.start);
        }}
      />
    </div>
  );
};

export default PersonalCalendar;
