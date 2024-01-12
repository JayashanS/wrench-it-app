import React, { useState } from "react";
import "../styles/Request.css";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

function Request() {
  return (
    <div className="container-request">
      <div className="view-request">
        <div className="incoming-request">
          <p style={{marginLeft:"20px",fontSize:"20"}}>Incoming<VolumeUpIcon style={{marginLeft:"380px",fontSize:"20"}}/></p><hr></hr>
          <div className="user-details"><p>Alice Smith</p></div>
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
