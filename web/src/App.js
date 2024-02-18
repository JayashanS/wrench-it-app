import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import { jwtDecode } from "jwt-decode";

import Login from "./components/Login";

//web imports
import Home from "./pages/Home";
import Carousel from "./components/Carousel";
import Cards from "./components/Cards";
import Signup from "./components/Signup";

// dashboard imports
import Dashboard from "./pages/Dashboard";
import Overview from "./components/Overview";
import Repair from "./components/Repair";
import Request from "./components/Request";
import Reservations from "./components/Reservations";
import Location from "./components/Directions";
import Photo from "./components/Photo";
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
  const userData = JSON.parse(localStorage.getItem("user"));
  if (userData && userData.email && userData.token) {
    const decodedToken = jwtDecode(userData.token);
    const currentTime = Date.now() / 1000;
    if (decodedToken.exp && decodedToken.exp > currentTime) {
      return true;
    }
  }
  return false;
};

function App() {
  const { user } = useAuthContext();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Carousel />} />
          <Route path="products" element={<Cards />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/dashboard" />}
        />

        <Route
          path="/dashboard"
          element={user ? <DashboardLayout /> : <Navigate to="/login" />}
        >
          <Route index element={<Overview />} />
          <Route path="view" index element={<Overview />} />
          <Route path="req" element={<Request />} />
          <Route path="stat" element={<Repair />} />
          <Route path="res" element={<Reservations />} />
          <Route path="help" element={<Help />} />
          <Route path="com" element={<Community />} />
          <Route path="set" element={<Settings />} />
          <Route path="photo" element={<Photo />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
