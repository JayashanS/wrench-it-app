import React from "react";
import GarageDetails from "./GarageDetails";
import DriverDetails from "./DriverDetails";

function Dashboard() {
  const garageData = {
    totalGarages: 50, // Replace with actual data
    totalRequests: 200, // Replace with actual data
  };

  const driverData = {
    totalDrivers: 80, // Replace with actual data
    totalRequests: 300, // Replace with actual data
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <GarageDetails {...garageData} />
      <DriverDetails {...driverData} />
    </div>
  );
}

export default Dashboard;
