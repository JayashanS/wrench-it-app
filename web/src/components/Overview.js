import React, { useState, useEffect } from "react";
import "../styles/Overview.css";

export default function Overview() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalID);
  }, []);

  // Get current time with Colombo time zone
  const currentTime = time.toLocaleTimeString("en-US", {
    timeZone: "Asia/Colombo",
  });
  const currentDate = time.toLocaleDateString("en-US", {
    timeZone: "Asia/Colombo",
  });

  return (
    <div className="overview-container">
      <h1>Current Time:</h1>
      <p>Time: {currentTime}</p>
      <p>Date: {currentDate}</p>
    </div>
  );
}
