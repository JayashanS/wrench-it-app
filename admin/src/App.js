import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DDrawer from "./components/Drawer";
import Dashboard from "./components/Dashboard";
import Garages from "./components/Garages";
import Drivers from "./components/Drivers";
import Logout from "./components/Logout";
import Box from "@mui/material/Box";

const App = () => {
  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <DDrawer />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/garages" element={<Garages />} />
          <Route path="drivers" element={<Drivers />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
