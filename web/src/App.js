import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//web imports
import Home from "./pages/Home";
import Carousel from "./components/Carousel";
import Cards from "./components/Cards";
import Signup from "./components/Signup";

// dashboard imports
import Dashboard from "./pages/Dashboard";
import Repair from "./components/Repair";
import Request from "./components/Request";
import Reservations from "./components/Reservations";
import Location from "./components/Directions";
import Help from "./components/Help";
import Settings from "./components/Settings";

function HomeLayout() {
  return (
    <div>
      <Home />
    </div>
  );
}
function DashboardLayout() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<HomeLayout />}>
          <Route index element={<Carousel />} />
          <Route path="products" element={<Cards />} />
          <Route path="signup" element={<Signup />} />
        </Route>

        <Route path="dashboard/*" element={<DashboardLayout />}>
          <Route index element={<Request />} />
          <Route path="req" element={<Request />} />
          <Route path="stat" element={<Repair />} />
          <Route path="res" element={<Reservations />} />
          <Route path="help" element={<Help />} />
          <Route path="loc" element={<Location />} />
          <Route path="set" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
