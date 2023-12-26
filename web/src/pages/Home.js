import React from "react";
import "../styles/Home.css"; // Import the CSS file

const Home = () => {
  const htmlContent = `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vehicle Assistance System</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="hero">
    <div class="hero-content">
      <h1>Welcome to our Vehicle Assistance System</h1>
      <p>
        This system is designed to offer immediate assistance to vehicle owners in the event of a breakdown. It seamlessly integrates navigation and reservation features, ensuring a seamless and stress-free experience for users. The mobile application conveniently directs you to the nearest repair centers with just a single click.
      </p>
    </div>
  </div>

  <div class="features">
    <div class="feature-tile mobile-app">
      <h2>Mobile App</h2>
      <p>Description about the mobile app for drivers...</p>
      <button>Get the Mobile App</button>
    </div>
    <div class="feature-tile web-app">
      <h2>Web App</h2>
      <p>Description about the web app for garage owners...</p>
      <button>Access Web App</button>
    </div>
  </div>

  <div class="about-us">
    <h2>About Us</h2>
    <p>
      Brief description about your company or the team. Talk about your mission, vision, or what makes your service unique.
    </p>
  </div>
</body>
</html>

  `;

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default Home;
