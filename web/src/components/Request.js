import React, { useState } from "react";
import "../styles/Request.css";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Request() {
  return (
    <div className="container-request">
      <div className="view-request">
        <div className="incoming-request">
          <div className="header-bar">
            <p style={{marginLeft:"20px"}}>Incoming</p><VolumeUpIcon style={{marginLeft:"350px",marginBottom:"15px"}}/>
          </div>

          <hr className="horizontal-line"/>

          <div className="user-details">
            <div className="profile-circle"/>
            <div className="name-box"><b>Alice Smith</b></div>
            <div className="icon-box">
              <DirectionsCarIcon/>
              <CallIcon/>
              <LocationOnIcon/>
            </div>
          </div>

          <div className="user-details"><p>Alice Smith</p></div>
        </div>
        <div className="accepted-request">
          <p>Accepted </p><hr></hr>
          <table>
            <tr></tr>
          </table>
        </div>
      </div>
      <div className="request-details">
        <div className="map">
          <div className="map-view">
            <p>map view</p>
          </div>
          <div className="map-details">
            <p>map details</p>
          </div>
        </div>
        <div className="chatbox">
          <div className="process-request">
            <p>Process request</p>
          </div>
          <div className="messagebox">
            <p>messagebox</p>  
          </div> 
        </div> 
      </div>
    </div>
  );
}


export default Request;
