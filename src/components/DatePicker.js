import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DatePicker = ({ close, scheduleDate }) => {
  const [value, onChange] = useState(Date.parse(new Date()));

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        zIndex: 999,
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      }}
    >
      <Calendar
        onChange={(e) => {
          onChange(Date.parse(e));
          scheduleDate(Date.parse(e));
        }}
        value={value}
      />
      <div style={{ paddingLeft: 325 }}>
        <button onClick={close}>X</button>
      </div>
    </div>
  );
};

export default DatePicker;
