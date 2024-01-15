import React from "react";
import "../styles/Pricing.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/system";

const SmallLabel = styled("div")({
  fontSize: "10px",
});

const MediumLabel = styled("div")({
  fontSize: "14px",
});

const LargeLabel = styled("div")({
  fontSize: "18px",
});

const Pricing = () => {
  const isEnabled = true; // Replace with your state logic
  const handleCheckboxChange = () => {
    // Handle checkbox change
  };

  return (
    <div className="pricing-container">
      <FormGroup>
        <FormControlLabel
          control={<Checkbox size="small" />}
          label={<SmallLabel>Small Label</SmallLabel>}
          checked={isEnabled}
          onChange={handleCheckboxChange}
        />
        <FormControlLabel
          control={<Checkbox />}
          label={<MediumLabel>Medium Label (Default)</MediumLabel>}
          checked={isEnabled}
          onChange={handleCheckboxChange}
        />
        <FormControlLabel
          control={<Checkbox size="large" />}
          label={<LargeLabel>Large Label</LargeLabel>}
          checked={isEnabled}
          onChange={handleCheckboxChange}
        />
      </FormGroup>
      {/* Other pricing-related content can go here */}
    </div>
  );
};

export default Pricing;
