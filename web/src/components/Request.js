import React, { useState, useEffect } from "react";
import "../styles/Request.css";
import axios from "axios";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CallIcon from "@mui/icons-material/Call";
import ConstructionIcon from "@mui/icons-material/Construction";
import MinorCrashIcon from "@mui/icons-material/MinorCrash";
import Directions from "./Directions";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

export default function Request() {
  const [incomingOutput, setIncoming] = useState("");
  const [startLocation, setStartLocation] = useState(null);
  const [endLocation, setEndLocation] = useState(null);
  const [email, setEmail] = useState("");
  const [responseText, setResponseText] = useState(""); // Renamed from `response`
  const [decisionBoxData, setDecisionBoxData] = useState({
    _id: "",
    vehicle: "",
    location: "",
    issue: "",
    contact: "",
  });

  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.email) {
          setEmail(user.email);
        }
      } catch (error) {
        console.error("Error fetching user email:", error);
      }
    };

    fetchUserEmail();
    incoming();
  }, []);

  useEffect(() => {
    const fetchGarageData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/garage/${email}`
        );

        if (response.status === 200) {
          const { location } = response.data;
          const { coordinates } = location;
          const [longitude, latitude] = coordinates;
          setStartLocation({ longitude, latitude });
          setEndLocation({ longitude, latitude });
        } else {
          throw new Error("Failed to fetch garage details");
        }
      } catch (error) {
        console.error("Error fetching garage details:", error);
      }
    };

    fetchGarageData();
    incoming();
  }, [email]);

  useEffect(() => {
    socket.on("location", () => {
      incoming();
    });

    return () => {
      socket.off("location");
    };
  }, [email]);

  const handleResponseChange = (event) => {
    setResponseText(event.target.value);
  };

  const acceptAndSendResponse = async (id, response) => {
    try {
      const data = {
        status: "Accepted",
        response: response,
      };

      const res = await axios.put(
        `http://localhost:4000/api/request/acc/${id}`,
        data
      );

      console.log("Response Data:", res.data);
      socket.emit("responding");
      incoming();
    } catch (error) {
      console.error("Error accepting and sending response:", error);
    }
  };

  const incoming = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/request/incoming/${email}`
      );
      console.log("Response Data:", response.data);
      const responseData = response.data;
      const requestJSX = responseData.map((item, index) => (
        <div className="user-details" key={index}>
          <div className="incom-avatar">
            <Avatar
              alt="Profile"
              sx={{
                marginTop: 1,
                width: 60,
                height: 60,
                bgcolor: "#09BEB1",
                color: "white",
              }}
            >
              <MinorCrashIcon />
            </Avatar>
            <div className="name-box">
              <b>{item.licensePlateNo}</b>
            </div>
          </div>
          <div className="details-box">
            <div className="icon-box">
              <DirectionsCarIcon
                style={{ color: "grey", marginRight: "8px" }}
              />{" "}
              {item.model}
            </div>
            <div className="icon-box">
              <CallIcon style={{ color: "grey", marginRight: "8px" }} />{" "}
              {item.phoneNo} <br />
            </div>
            <div className="icon-box">
              <ConstructionIcon style={{ color: "grey", marginRight: "8px" }} />{" "}
              {item.fault} <br />
            </div>
          </div>

          <div className="button-box">
            <Stack spacing={1} direction="column">
              <Button
                variant="contained"
                onClick={() =>
                  decision(
                    item._id,
                    item.licensePlateNo,
                    item.longitude,
                    item.latitude,
                    item.fault,
                    item.phoneNo
                  )
                }
                style={{ color: "white", textTransform: "none" }}
              >
                View{" "}
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => decline(item._id)}
                style={{ color: "white", textTransform: "none" }}
              >
                Decline
              </Button>
            </Stack>
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

  const decision = async (
    _id,
    vehicle,
    longitude,
    latitude,
    issue,
    contact
  ) => {
    setDecisionBoxData({
      // ...prevState,
      _id: _id,
      vehicle: vehicle,
      issue: issue,
      contact: contact,
    });
    setEndLocation({ longitude, latitude });

    try {
      const accessToken = `${process.env.REACT_APP_API_TOKEN}`;

      const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${accessToken}`;

      const response = await axios.get(apiUrl);

      if (response.status === 200) {
        const locationName = response.data.features[0].place_name;
        setDecisionBoxData({
          location: locationName,
          _id: _id,
          vehicle: vehicle,
          issue: issue,
          contact: contact,
        });
      } else {
        throw new Error("Failed to fetch location name");
      }
    } catch (error) {
      console.error("Error fetching location name:", error);
      throw error;
    }
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
        <div className="header-bar">
          <p style={{ marginLeft: "20px" }}>Details</p>
        </div>
        <div className="map">
          {startLocation && endLocation && (
            <Directions
              startLocation={{
                coordinates: [startLocation.longitude, startLocation.latitude],
              }}
              endLocation={{
                coordinates: [endLocation.longitude, endLocation.latitude],
              }}
            />
          )}
        </div>
        <div className="desicion-box">
          <div className="desicion-box-upper">
            <Avatar
              alt="Profile"
              sx={{ marginTop: 3, width: 60, height: 60 }}
              className="menu-profile-photo"
            />
            <div className="vehicle-detail">
              <div className="detail-boxes">
                <div className="info">
                  <strong>Vehicle:</strong> <br />
                  {decisionBoxData.vehicle}
                </div>
              </div>
              <div className="detail-boxes">
                <div className="info">
                  <strong>Location:</strong> <br />
                  {decisionBoxData.location}
                </div>
              </div>
              <div className="detail-boxes">
                <div className="info">
                  <strong>Issue:</strong> <br />
                  {decisionBoxData.issue}
                </div>
              </div>
              <div className="detail-boxes">
                <div className="info">
                  <strong>Contact:</strong> <br />
                  {decisionBoxData.contact}
                </div>
              </div>
            </div>
          </div>
          <div className="desicion-box-lower">
            <TextField
              id="outlined-basic"
              label="Add a Response to the User"
              variant="outlined"
              size="small"
              multiline
              style={{ width: "50%", marginRight: "16px" }}
              value={responseText}
              onChange={handleResponseChange}
            />
            <Stack spacing={1} direction="row">
              <Button
                variant="contained"
                style={{ color: "white", textTransform: "none" }}
                onClick={() =>
                  acceptAndSendResponse(decisionBoxData._id, responseText)
                }
              >
                Accept and Send
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => decline(decisionBoxData._id)}
                style={{ color: "white", textTransform: "none" }}
              >
                Decline
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}
