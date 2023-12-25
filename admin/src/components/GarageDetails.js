import React from "react";
import { Paper, Typography } from "@mui/material";

const GarageDetails = ({ totalGarages, totalRequests }) => {
  return (
    <Paper elevation={3} style={{ padding: 20, margin: 20 }}>
      <Typography variant="h5" gutterBottom>
        Garage Details
      </Typography>
      <Typography variant="body1">
        Total Garages Registered: {totalGarages}
      </Typography>
      <Typography variant="body1">Total Requests: {totalRequests}</Typography>
    </Paper>
  );
};

export default GarageDetails;
