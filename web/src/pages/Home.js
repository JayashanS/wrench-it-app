import React from "react";
import "../styles/Home.css"; // Make sure to have the appropriate CSS file
import Carousel from "../components/Carousel";

function Home() {
  return (
    <div className="App">
      <div id="home" className="section"></div>

      <div id="products" className="section">
        <h2>Products</h2>
        <p>Check out our amazing products.</p>
      </div>

      <div id="aboutus" className="section">
        <h2>About Us</h2>
        <p>Learn more about our company.</p>
      </div>
    </div>
  );
}

export default Home;
