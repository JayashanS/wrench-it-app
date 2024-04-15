import React, { useState } from "react";
import "../styles/Feedback.css";

export default function Feedback() {
  return (
    <div className="feedback-container">
      <div className="giphy-container">
        <iframe
          src="https://giphy.com/embed/oNr6IBi0Hnnnq"
          width="399"
          height="480"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
        <p>
          <a href="https://giphy.com/gifs/dancing-kermit-etOX3h7ApZuDe7Fc5w"></a>
        </p>
  </div> 
    </div>
  );
}




