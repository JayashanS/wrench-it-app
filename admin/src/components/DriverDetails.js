import React from "react";
import { Paper, Typography } from "@mui/material";

const DriverDetails = ({ totalDrivers, totalRequests }) => {
  return (
    <Paper elevation={3} style={{ padding: 20, margin: 20 }}>
      <Typography variant="h5" gutterBottom>
        Driver Details
      </Typography>
      <Typography variant="body1">Total Drivers: {totalDrivers}</Typography>
      <Typography variant="body1">Total Requests: {totalRequests}</Typography>
    </Paper>
  );
};

export default DriverDetails;
