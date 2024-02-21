import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import "../styles/Services.css";

const MediumLabel = styled("div")({
  fontSize: "14px",
});
const Services = () => {
  const [suspensionRepairs, setSuspensionRepairs] = useState(false);
  const [transmissionIssues, setTransmissionIssues] = useState(false);
  const [electrical, setElectrical] = useState(false);
  const [electronic, setElectronic] = useState(false);
  const [bodyRepairsAndPainting, setBodyRepairsAndPainting] = useState(false);
  const [breakdownRepairAndServices, setBreakdownRepairAndServices] =
    useState(false);
  const [engine, setEngine] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [hvSystem, setHVSystem] = useState(false);
  const [brakeServicesAndMaintenance, setBrakeServicesAndMaintenance] =
    useState(false);
  const [motorcyclesAndThreewheelers, setMotorcyclesAndThreewheelers] =
    useState(false);
  const [heavyWeight, seteHeavyWeight] = useState(false);
  const [lightWeight, setLightWeight] = useState(false);
  const [maxAmount, setMaxAmount] = useState("");
  const [minAmount, setMinAmount] = useState("");
  const [garageId, setGarageId] = useState(localStorage.getItem("garageId"));

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/garage/${garageId}`
      );
      const responseData = response.data;
      setSuspensionRepairs(responseData.services.SuspensionRepairs);
      setTransmissionIssues(responseData.services.TransmissionIssues);
      setElectrical(responseData.services.Electrical);
      setElectronic(responseData.services.Electronic);
      setBodyRepairsAndPainting(responseData.services.BodyRepairsAndPainting);
      setBreakdownRepairAndServices(
        responseData.services.BreakdownRepairAndServices
      );
      setEngine(responseData.services.Engine);
      setScanning(responseData.services.Scanning);
      setHVSystem(responseData.services.HVSystem);
      setBrakeServicesAndMaintenance(
        responseData.services.BrakeServicesAndMaintenance
      );
      setMotorcyclesAndThreewheelers(
        responseData.categories.MotorcyclesAndThreeWheelers
      );
      seteHeavyWeight(responseData.categories.HeavyWeight);
      setLightWeight(responseData.categories.LightWeight);
      setMinAmount(responseData.minCharge);
      setMaxAmount(responseData.maxCharge);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const updateServices = async () => {
    try {
      const updatedData = {
        services: {
          SuspensionRepairs: suspensionRepairs,
          TransmissionIssues: transmissionIssues,
          Electrical: electrical,
          Electronic: electronic,
          BodyRepairsAndPainting: bodyRepairsAndPainting,
          BreakdownRepairAndServices: breakdownRepairAndServices,
          Engine: engine,
          Scanning: scanning,
          HVSystem: hvSystem,
          BrakeServicesAndMaintenance: brakeServicesAndMaintenance,
        },
        categories: {
          MotorcyclesAndThreeWheelers: motorcyclesAndThreewheelers,
          LightWeight: lightWeight,
          HeavyWeight: heavyWeight,
        },
        minCharge: minAmount,

        maxCharge: maxAmount,
      };

      const response = await axios.put(
        `http://localhost:4000/api/garage/services/${garageId}`,
        updatedData
      );

      console.log("Update successful:", response.data);
    } catch (error) {
      console.error("Error updating services:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="services-container">
      <div className="services-row-1">
        <div className="services-row-1-column">
          <span className="services-title">Service Categories</span>{" "}
          <span className="services-body">
            Thank you for choosing to partner with us! To enhance the accuracy
            and effectiveness of your service listing, we kindly request you to
            provide detailed information about your repair center, by filling
            out the service categories
          </span>
          <FormGroup sx={{ display: "flex", flexdirection: "row" }}>
            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Suspension Repairs</MediumLabel>}
              onChange={() => setSuspensionRepairs((prevValue) => !prevValue)}
              checked={suspensionRepairs}
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Transmission Issues</MediumLabel>}
              onChange={() => setTransmissionIssues((prevValue) => !prevValue)}
              checked={transmissionIssues}
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Electrical</MediumLabel>}
              onChange={() => setElectrical((prevValue) => !prevValue)}
              checked={electrical}
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Electronic</MediumLabel>}
              onChange={() => setElectronic((prevValue) => !prevValue)}
              checked={electronic}
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Body Repairs & Painting</MediumLabel>}
              onChange={() =>
                setBodyRepairsAndPainting((prevValue) => !prevValue)
              }
              checked={bodyRepairsAndPainting}
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Breakdown Repair and Services</MediumLabel>}
              onChange={() =>
                setBreakdownRepairAndServices((prevValue) => !prevValue)
              }
              checked={breakdownRepairAndServices}
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Engine</MediumLabel>}
              onChange={() => setEngine((prevValue) => !prevValue)}
              checked={engine}
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Scanning</MediumLabel>}
              onChange={() => setScanning((prevValue) => !prevValue)}
              checked={scanning}
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>HV System</MediumLabel>}
              onChange={() => setHVSystem((prevValue) => !prevValue)}
              checked={hvSystem}
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Brake Services and Maintenance</MediumLabel>}
              onChange={() =>
                setBrakeServicesAndMaintenance((prevValue) => !prevValue)
              }
              checked={brakeServicesAndMaintenance}
            />
          </FormGroup>
        </div>
        <div className="services-row-1-column">
          <span className="services-title">Vehicle Categories</span>{" "}
          <span className="services-body">
            To optimize your service listing and ensure that potential customers
            find the most relevant information, we kindly ask you to provide
            specific details about the vehicle categories your repair center
            specializes in.
          </span>
          <FormGroup sx={{ display: "flex", flexdirection: "row" }}>
            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Motorcycles And ThreeWheelers</MediumLabel>}
              onChange={() =>
                setMotorcyclesAndThreewheelers((prevValue) => !prevValue)
              }
              checked={motorcyclesAndThreewheelers}
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Heavy Weight</MediumLabel>}
              onChange={() => seteHeavyWeight((prevValue) => !prevValue)}
              checked={heavyWeight}
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Light Weight</MediumLabel>}
              onChange={() => setLightWeight((prevValue) => !prevValue)}
              checked={lightWeight}
            />
          </FormGroup>
          <br />
          <span className="services-title">Charges</span>{" "}
          <span className="services-body">
            How much would you charge for a visit ?
          </span>
          <br />
          <TextField
            id="outlined-basic"
            label="Maximum Amount "
            variant="outlined"
            size="small"
            className="info-field-text"
            sx={{ width: "250px" }}
            value={maxAmount}
            onChange={(event) => setMaxAmount(event.target.value)}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Minimum Amount "
            variant="outlined"
            size="small"
            className="info-field-text"
            sx={{ width: "250px" }}
            value={minAmount}
            onChange={(event) => setMinAmount(event.target.value)}
          />
        </div>
      </div>
      <div className="services-row-2">
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            style={{ width: "80px", color: "white" }}
            onClick={updateServices}
          >
            Save
          </Button>
          <Button
            variant="contained"
            color="error"
            style={{ width: "80px", color: "white" }}
            onClick={() => console.log("Delete button clicked")}
          >
            clear
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default Services;
