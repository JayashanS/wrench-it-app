import React, { useState } from "react";
import "../styles/Request.css";

function Request() {
  return (
    <div className="container-request">
      <div className="view-request">
        <div className="incoming-request">
          <p>incoming request</p>
        </div>
        <div className="accepted-request">
          <p>accepted request</p>
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
