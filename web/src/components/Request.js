import React from "react";
import "../styles/Request.css";

import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
//import SendIcon from '@mui/icons-material/Send';
import ReorderIcon from '@mui/icons-material/Reorder';
import Directions from "./Directions"
import MessageBox from "./MessageBox";


export default function Request() {


  return (
    <div className="container-request">

      <div className="view-request">
        <div className="incoming-request">
          <div className="header-bar">
            <p style={{ marginLeft: "20px" }}>Incoming</p>
            <VolumeUpIcon style={{ marginLeft: "350px", marginBottom: "15px" }}/>
            <br />
          </div>
          <div className="user-details">
            <div className="profile-circle"></div>
            <div className="name-box">
              <b>Alice Smith</b>
            </div>
            <div className="icon-box">
              <DirectionsCarIcon />
              <CallIcon />
              <LocationOnIcon />
            </div>
            <div className="details-box">
              Toyota Camry <br />
              +94710000000 <br />
              Matara <br />
            </div>
            <div className="button-box">
              <button className="custom-button">View</button>
              <button
                className="custom-button"
                style={{ backgroundColor: "red" }}
              >
                Decline
              </button>
            </div>
          </div>

          <div className="user-details">
            <div className="profile-circle"></div>
            <div className="name-box">
              <b>Alice Smith</b>
            </div>
            <div className="icon-box">
              <DirectionsCarIcon />
              <CallIcon />
              <LocationOnIcon />
            </div>
            <div className="details-box">
              Toyota Camry <br />
              +94710000000 <br />
              Matara <br />
            </div>
            <div className="button-box">
              <button className="custom-button">View</button>
              <button className="custom-button"style={{ backgroundColor: "red" }}>
                Decline
              </button>
            </div>
          </div>
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
          <p style={{marginLeft:"20px"}}>Details</p>
        </div>
        <div className="map">
          <Directions/>
        </div>

        <div className="chat-box">
          <div className="message-box">
            <MessageBox/>
          </div>
          <div className="desicion-box">
          </div>
        </div>

      </div>
    </div>
  );
}


