import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
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
          <span className="services-title">Vehicle Categories</span>{" "}
          <FormGroup sx={{ display: "flex", flexdirection: "row" }}>
            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Light Weight</MediumLabel>}
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Light Weight</MediumLabel>}
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<MediumLabel>Light Weight</MediumLabel>}
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
            <TextField
              label="Size"
              id="outlined-size-small"
              defaultValue="Small"
              size="small"
            />
          </Box>
        </div>
      </div>
      <div className="services-row-2"></div>
    </div>
  );
};

export default Services;
