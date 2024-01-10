import React, { useState } from "react";
import "../styles/Request.css";

function Request() {
  return (
    <div className="container-request">
      <div className="process-request">
        <div className="incoming-request"></div>
        <div className="accepted-request"></div>
      </div>
      <div className="request-details"></div>
    </div>
  );
}

export default Request;
