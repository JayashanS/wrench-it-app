import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Cards from "./components/Cards";

// dashboard imports
import Drawer from "./components/Drawer";
import Statistics from "./components/Statistics";
import GarageDetails from "./components/GarageDetails";
import Reservations from "./components/Reservations";

function DashboardLayout() {
  return (
    <div>
      <Drawer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="products" element={<Cards />} />

        <Route path="dashboard/*" element={<DashboardLayout />}>
          {/*<Route index element={<GarageDetails />} />*/}
          <Route path="form" element={<GarageDetails />} />
          <Route path="stat" element={<Statistics />} />
          <Route path="res" element={<Reservations />} />
          <Route path="settings" element={<GarageDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
