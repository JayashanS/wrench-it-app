import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DDrawer from "./components/Drawer";
import Dashboard from "./components/Dashboard";
import GaragesTable from "./components/GaragesTable";
import Drivers from "./components/Drivers";
import Logout from "./components/Logout";
import LoginForm from "./pages/LoginForm"; // Import your login form component
import Box from "@mui/material/Box";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    setIsLoggedIn(true); // For example, set to true upon successful login
  };

  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        {!isLoggedIn ? (
          <Routes>
            <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
          </Routes>
        ) : (
          <>
            <DDrawer />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/garages" element={<GaragesTable />} />
              <Route path="/drivers" element={<Drivers />} />
              <Route
                path="/logout"
                element={<LoginForm onLogin={handleLogin} />}
              />
            </Routes>
          </>
        )}
      </Box>
    </Router>
  );
};

export default App;
