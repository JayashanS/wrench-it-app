import React, { useState, useEffect } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import Map from "./PMap";
import "../styles/Overview.css";
import Logo from "../assets/center.jpg";

import Card from "./ProfileCard";

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
  const uData = [40, 30, 20, 27, 18, 23, 34];
  const pData = [20, 13, 40, 39, 48, 38, 43];
  const cDate = new Date();

  const daysOfWeek = Array.from({ length: 7 }, (_, i) => {
    const pastDate = new Date(cDate);
    pastDate.setDate(cDate.getDate() - i);
    const month = pastDate.getMonth() + 1;
    const dayOfMonth = pastDate.getDate();
    return `${month}/${dayOfMonth}`;
  });

  const xLabels = daysOfWeek.reverse();

  return (
    <div className="overview-container">
      <div className="overview-col-1">
        <h1>Current Time:</h1>
        <p>Time: {currentTime}</p>
        <p>Date: {currentDate}</p>
        <LineChart
          width={500}
          height={250}
          series={[
            { data: pData, label: "Resevations" },
            { data: uData, label: "Requests" },
          ]}
          xAxis={[{ scaleType: "point", data: xLabels }]}
        />
      </div>
      <div className="overview-col-2">
        <div className="overview-profile-title">
          <span
            style={{ fontWeight: "bold", fontSize: "16px", paddingTop: "10px" }}
          >
            Revive Auto Solutions
          </span>
          <span style={{ fontSize: "12px" }}>Kiribathgoda</span>
        </div>
        <div className="overview-profile-pic-container">
          <img src={Logo} alt="Logo" className="overview-profile-pic" />
        </div>
        <span style={{ fontSize: "12px" }}>
          {" "}
          Unlock convenience and security with our premium garage solutions.
          Transform your space into a haven for vehicles and hobbies. Elevate
          your property's functionality today!
        </span>
        <span style={{ fontSize: "12px" }}>
          {" "}
          A garage is a versatile space typically attached to or near a
          residential or commercial building, designed primarily for parking
          vehicles and storing tools, equipment, and other household or
          automotive items. Garages often feature a large door, usually operated
          manually or automatically, providing access for vehicles. Beyond its
          primary function as a shelter for cars, motorcycles, or bicycles, a
          garage can serve various purposes, including a workshop for DIY
          projects, a storage area for seasonal items, or a recreational space
          for hobbies. Some garages may also incorporate additional amenities
          like workbenches, shelving, or utility sinks to support maintenance
          tasks or organizational needs. Overall, a garage is a practical and
          flexible environment that plays a vital role in enhancing the
          functionality and convenience of a property.
        </span>
        <Map />
      </div>
    </div>
  );
}
