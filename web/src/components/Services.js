import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import "../styles/Services.css";
const MediumLabel = styled("div")({
  fontSize: "14px",
});
const Services = () => {
  return (
    <div className="services-container">
      <div className="services-row-1">
        <div className="services-ow-1-column-1">
          <span className="services-title">Services Offered</span>{" "}
          <FormGroup sx={{ display: "flex", flexdirection: "row" }}>
            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Suspension Repairs</MediumLabel>}
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Transmission Issues</MediumLabel>}
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Electrical</MediumLabel>}
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Electronic</MediumLabel>}
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Body Repairs & Painting</MediumLabel>}
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Breakdown Repair and Services</MediumLabel>}
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Engine</MediumLabel>}
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Scanning</MediumLabel>}
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>HV System</MediumLabel>}
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Brake Services and Maintenance</MediumLabel>}
            />
          </FormGroup>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 2, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField label="Add More" id="outlined-size-small" size="small" />
            <Button
              variant="contained"
              style={{ width: "80px", color: "white", top: "16px" }}
            >
              {" "}
              Add
            </Button>
          </Box>
        </div>
      </div>
      <div className="services-row-2"></div>
    </div>
  );
};

export default Services;
