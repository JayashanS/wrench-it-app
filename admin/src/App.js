import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// dashboard imports
import Dashboard from "./pages/Dashboard";
import User from "./components/UserTable";
import Request from "./components/RequestTable";
import Repair from "./components/RepairTable";
import Reservation from "./components/ReservationTable";
import Garage from "./components/GarageTable";

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
        <Route path="/*" element={<DashboardLayout />}>
          <Route index element={<User />} />
          <Route path="user" element={<User />} />
          <Route path="req" element={<Request />} />
          <Route path="rep" element={<Repair />} />
          <Route path="res" element={<Reservation />} />
          <Route path="gar" element={<Garage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
