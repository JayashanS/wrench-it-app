import React from "react";
import "../styles/Cards.css";
import im1 from "../assets/mobile-app.jpg";
import im2 from "../assets/web-app.jpg";

const Cards = () => {
  return (
    <div className="cards-wrapper">
      <div className="card-1">
        <h1 class="title">Mobile App</h1>
        <img src={im1} alt="Card 1" className="card-image" />
        <div className="card-description">
          <p class="body">
            Revolutionizing Roadside Assistance: Our mobile app is your lifeline
            during breakdowns.{" "}
            <ul>
              <li>Find nearby repair centers</li>
              <li>View contact details</li>
              <li>Chat & share info with garages</li>
              <li>Track repair progress</li>
              <li>Make reservations</li>
            </ul>
          </p>
          <button
            className="card-button"
            onClick={() =>
              window.open(
                "https://www.figma.com/proto/xC6WTpkj2W1SELYzJhsots/Wrench-it?type=design&node-id=5-2&t=LwiYWS49kNSXHW1x-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=5%3A2"
              )
            }
          >
            Mobile App
          </button>
        </div>
      </div>
      <div className="card-2">
        <h1 class="title">Web App</h1>
        <img src={im2} alt="Card 2" className="card-image" />
        <div className="card-description">
          <p class="body">
            Effortless Service Management: Our web app caters to repair center
            holders, offering a comprehensive platform.
            <ul>
              <li>Vehicle details tracking</li>
              <li>Maintenance history</li>
              <li>Parking space management</li>
              <li>Real-time availability status</li>
              <li>User feedback (Rating System)</li>
              <li>Booking System</li>
            </ul>
          </p>
          <button className="card-button">To Dashboard</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
