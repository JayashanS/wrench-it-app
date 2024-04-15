import React, { useState, useEffect } from "react";
import "../styles/Request.css";
import axios from "axios";

import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
//import SendIcon from '@mui/icons-material/Send';
import ReorderIcon from "@mui/icons-material/Reorder";
import Directions from "./Directions";
import MessageBox from "./MessageBox";
import { lightBlue } from "@mui/material/colors";

export default function Request() {
  const [incomingOutput, setIncoming] = useState("");
  const [desicionJSX, setDesicion] = useState("");

  useEffect(() => {
    incoming();
  }, []);

  const incoming = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/request/incoming`
      );
      console.log("Response Data:", response.data);
      const responseData = response.data;

      // If responseData is an array of objects
      const requestJSX = responseData.map((item, index) => (
        <div className="user-details" key={index}>
          <div className="profile-circle"></div>
          <div className="name-box">
            <b>{item.ownerName}</b>
          </div>
          <div className="icon-box">
            <DirectionsCarIcon />
            <CallIcon />
            <LocationOnIcon />
          </div>
          <div className="details-box">
            {item.vehicleType} <br />
            {item.mobileNo} <br />
          </div>
          <div className="button-box">
            <button
              className="custom-button"
              style={{ textAlign: "center" }}
              onClick={() =>
                desicion(
                  item.vehicleType,
                  item.longitude,
                  item.issue,
                  item.mobileNo
                )
              }
            >
              View
            </button>
            <button
              className="custom-button"
              style={{ backgroundColor: "red" }}
              onClick={() => decline(item._id)}
            >
              Decline
            </button>
          </div>
        </div>
      ));

      setIncoming(requestJSX);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const decline = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/request/dec/${id}`
      );
      console.log("Response Data:", response.data);
      incoming();
    } catch (error) {
      console.error("Error declining request:", error);
    }
  };

  const desicion = async (vehicle, location, issue, contact) => {
    const decisionJSX = (
      <div className="desicion-box">
        <div className="desicion-box-left">
          <div className="profile-circle"></div>
          <div className="vehicle-detail">
            <div className="detail-boxes">
              <div className="info">
                <strong>Vehicle:</strong> <br />
                {vehicle}
              </div>
            </div>
            <div className="detail-boxes">
              <div className="info">
                <strong>Location:</strong> <br />
                {location}
              </div>
            </div>
            <div className="detail-boxes">
              <div className="info">
                <strong>Issue:</strong> <br />
                {issue}
              </div>
            </div>
            <div className="detail-boxes">
              <div className="info">
                <strong>Contact:</strong> <br />
                {contact}
              </div>
            </div>
          </div>
        </div>

        <div className="desicion-box-right">
          <div className="buttons">
            <button className="custom-button accept">Accept</button>
            <button className="custom-button hold">Hold</button>
            <button className="custom-button decline">Decline</button>
          </div>
        </div>
      </div>
    );

    setDesicion(decisionJSX);
  };

  return (
    <div className="container-request">
      <div className="view-request">
        <div className="incoming-request">
          <div className="header-bar">
            <p style={{ marginLeft: "20px" }}>Incoming</p>
            <VolumeUpIcon
              style={{ marginLeft: "350px", marginBottom: "15px" }}
            />
            <br />
          </div>
          {incomingOutput}
        </div>
        <div className="accepted-request">
          <div className="header-bar">
            <p style={{ marginLeft: "20px" }}>Accepted</p>

            <br />
          </div>

          <table>
            <tr></tr>
          </table>
        </div>
      </div>

      <div className="request-details">
        {/*<ReorderIcon style={{ marginLeft: "350px", marginBottom: "15px" }}/>*/}

        <div className="header-bar">
          <p style={{ marginLeft: "20px" }}>Details</p>
        </div>
        <div className="map">
          <Directions
            startLocation={{ coordinates: [80.540379, 5.949636] }}
            endLocation={{ coordinates: [80.55, 5.959] }}
          />
        </div>

        <div className="chat-box">
          {/* <div className="message-box">
            <MessageBox />
  </div> */}
          {desicionJSX}
        </div>
      </div>
    </div>
  );
}
