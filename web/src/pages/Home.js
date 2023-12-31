import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Cards from "../components/Cards";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="navbar-wrapper">
        <Navbar />
      </div>
      <Routes>
        <Route index element={<Carousel />} />
        <Route path="/products" element={<Cards />} />
        {/* Other nested routes within Home */}
      </Routes>
    </div>
  );
}

export default Home;
