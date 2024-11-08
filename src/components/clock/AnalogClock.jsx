import React, { useEffect, useState } from "react";
import "./analogClock.css";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourAngle = (hours % 12) * 30 + minutes / 2;
  const minuteAngle = minutes * 6 + seconds / 10;
  const secondAngle = seconds * 6;

  const secondMarks = Array.from({ length: 60 }).map((_, i) => (
    <div
      key={i}
      className="second-mark"
      style={{ transform: `rotate(${i * 6}deg) translateY(-90px)` }}
    />
  ));

  const hourMarks = Array.from({ length: 12 }).map((_, i) => (
    <div
      key={`hour-${i}`}
      className="hour-mark"
      style={{ transform: `rotate(${i * 30}deg) translateY(-90px)` }}
    />
  ));

  return (
    <div className="clock-face">
      {secondMarks}
      {hourMarks}

      <div
        className="hour-hand"
        style={{ transform: `rotate(${hourAngle}deg)` }}
      />
      <div
        className="minute-hand"
        style={{ transform: `rotate(${minuteAngle}deg)` }}
      />
      <div
        className="second-hand"
        style={{ transform: `rotate(${secondAngle}deg)` }}
      />
    </div>
  );
};

export default AnalogClock;
