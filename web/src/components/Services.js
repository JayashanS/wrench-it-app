import React, { useState } from "react";
import Box from "@mui/material/Box";
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
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Transmission Issues</MediumLabel>}
              onChange={() => setTransmissionIssues((prevValue) => !prevValue)}
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Electrical</MediumLabel>}
              onChange={() => setElectrical((prevValue) => !prevValue)}
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Electronic</MediumLabel>}
              onChange={() => setElectronic((prevValue) => !prevValue)}
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Body Repairs & Painting</MediumLabel>}
              onChange={() =>
                setBodyRepairsAndPainting((prevValue) => !prevValue)
              }
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Breakdown Repair and Services</MediumLabel>}
              onChange={() =>
                setBreakdownRepairAndServices((prevValue) => !prevValue)
              }
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Engine</MediumLabel>}
              onChange={() => setEngine((prevValue) => !prevValue)}
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Scanning</MediumLabel>}
              onChange={() => setScanning((prevValue) => !prevValue)}
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>HV System</MediumLabel>}
              onChange={() => setHVSystem((prevValue) => !prevValue)}
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Brake Services and Maintenance</MediumLabel>}
              onChange={() =>
                setBrakeServicesAndMaintenance((prevValue) => !prevValue)
              }
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
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Heavy Weight</MediumLabel>}
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Light Weight</MediumLabel>}
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
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Minimum Amount "
            variant="outlined"
            size="small"
            className="info-field-text"
            sx={{ width: "250px" }}
          />
        </div>
      </div>
      <div className="services-row-2">
        <Stack spacing={2} direction="row">
          <Button variant="contained" style={{ width: "80px", color: "white" }}>
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
