import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//web imports
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Cards from "./components/Cards";
import Signup from "./components/Signup";

// dashboard imports
import Drawer from "./components/Drawer";
import Statistics from "./components/Statistics";
import GarageDetails from "./components/GarageDetails";
import Reservations from "./components/Request";
import Location from "./components/Location";

function NavbarLayout() {
  return (
    <div>
      <Navbar />
    </div>
  );
}
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
        <Route path="/*" element={<NavbarLayout />}>
          <Route index element={<Carousel />} />
          <Route path="products" element={<Cards />} />
          <Route path="signup" element={<Signup />} />
        </Route>

        <Route path="dashboard/*" element={<DashboardLayout />}>
          <Route index element={<GarageDetails />} />
          <Route path="form" element={<GarageDetails />} />
          <Route path="stat" element={<Statistics />} />
          <Route path="res" element={<Reservations />} />
          <Route path="loc" element={<Location />} />
          <Route path="settings" element={<GarageDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
