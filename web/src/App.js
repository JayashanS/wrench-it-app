import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./components/Login";

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
import Community from "./components/Community";
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

const isAuthenticated = () => {
  // Implement your authentication logic here, e.g., check if the user has a valid token
  // Return true if authenticated, false otherwise
  return false; // For demonstration purposes, always return true
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Carousel />} />
          <Route path="products" element={<Cards />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard/*"
          element={
            isAuthenticated() ? (
              <DashboardLayout />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        >
          <Route index element={<Request />} />
          <Route path="req" element={<Request />} />
          <Route path="stat" element={<Repair />} />
          <Route path="res" element={<Reservations />} />
          <Route path="help" element={<Help />} />
          <Route path="com" element={<Community />} />
          <Route path="set" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
