import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";

import "../styles/Info.css";

const Info = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [repairCenterName, setRepairCenterName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerNIC, setOwnerNIC] = useState("");
  const [numOfWorkers, setNumOfWorkers] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [loading, setLoading] = React.useState(true);

  const handleRepairCenterNameChange = (event) => {
    setRepairCenterName(event.target.value);
  };
  const handleOwnerNameChange = (event) => {
    setOwnerName(event.target.value);
  };
  const handleOwnerNICChange = (event) => {
    setOwnerNIC(event.target.value);
  };
  const handleNumOfWorkersChange = (event) => {
    setNumOfWorkers(event.target.value);
  };
  const handleStreetChange = (event) => {
    setStreet(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleStateChange = (event) => {
    setState(event.target.value);
  };
  const handlePostalCodeChange = (event) => {
    setPostalCode(event.target.value);
  };

  const handleCheckboxChange = () => {
    setIsEnabled((prevValue) => !prevValue);
  };

  const MediumLabel = styled("div")({
    fontSize: "14px",
  });

  const handleSaveButtonClick = async () => {
    setLoading(true);
    console.log("handleSaveButtonClick function is called");
    try {
      const response = await axios.get(
        "http://localhost:4000/api/garage/123456"
      );
      const existingData = response.data;

      const updatedData = {
        repairCenterName,
        ownerName,
        ownerNIC,
        numOfWorkers,
        street,
        city,
        state,
        postalCode,
      };

      const headers = {
        "Content-Type": "application/json",
      };

      console.log("Existing Data:", existingData);

      if (existingData) {
        console.log("Updating Document...");
        await axios.put(
          `http://localhost:4000/api/garage/123456`,
          updatedData,
          { headers }
        );
        console.log("Document updated successfully!");
        handleClick();
        setLoading(false);
      } else {
        console.log("Creating New Document...");
        await axios.post("http://localhost:4000/api/garage", updatedData, {
          headers,
        });
        console.log("New document created successfully!");
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/garage/123456"
      );
      console.log("Response Data:", response.data);
      const responseData = response.data;

      setRepairCenterName(responseData.repairCenterName);
      setOwnerName(responseData.ownerName);
      setOwnerNIC(responseData.ownerNIC);
      setNumOfWorkers(responseData.numOfWorkers);
      setStreet(responseData.street);
      setCity(responseData.city);
      setState(responseData.state);
      setPostalCode(responseData.postalCode);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="primary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="white"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <Box
      className="info-container"
      component="form"
      sx={{
        "& > :not(style)": { m: 2, width: "250ch", fontSize: "20px" },
        "& .info-field-text:not(:last-child)": { mb: 2 },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="info-field">
        <span className="info-field-title">Service Center Details</span>

        <TextField
          id="standard-basic"
          label="Repair Center Name"
          variant="standard"
          className="info-field-text"
          value={repairCenterName}
          onChange={handleRepairCenterNameChange}
          sx={{ width: "400px" }}
        />
        <TextField
          id="standard-basic"
          label="Owner Name"
          variant="standard"
          className="info-field-text"
          value={ownerName}
          onChange={handleOwnerNameChange}
          sx={{ width: "400px" }}
        />
        <TextField
          id="standard-basic"
          label="Owner NIC"
          variant="standard"
          className="info-field-text"
          value={ownerNIC}
          onChange={handleOwnerNICChange}
          sx={{ width: "300px" }}
        />
        <TextField
          id="standard-basic"
          label="Number Of Workers"
          type="number"
          variant="standard"
          className="info-field-text"
          value={numOfWorkers}
          onChange={handleNumOfWorkersChange}
          sx={{ width: "300px" }}
        />
        <TextField
          id="standard-basic"
          label="Street Address"
          variant="standard"
          className="info-field-text"
          value={street}
          onChange={handleStreetChange}
          sx={{ width: "400px" }}
        />
        <TextField
          id="standard-basic"
          label="City or Locality"
          variant="standard"
          className="info-field-text"
          value={city}
          onChange={handleCityChange}
          sx={{ width: "400px" }}
        />
        <TextField
          id="standard-basic"
          label="State"
          variant="standard"
          className="info-field-text"
          value={state}
          onChange={handleStateChange}
          sx={{ width: "400px" }}
        />
        <TextField
          id="standard-basic"
          label="Postal Code"
          variant="standard"
          type="text"
          className="info-field-text"
          value={postalCode}
          onChange={handlePostalCodeChange}
          sx={{ width: "400px" }}
        />

        {/*<TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          InputLabelProps={{ style: { fontSize: "15px", color: "black" } }}
          inputProps={{ style: { fontSize: "15px" } }}
        />*/}
      </div>
      <div className="info-field">
        <span className="info-field-title">Opening Hours</span>
        <TextField
          id="standard-basic"
          label=""
          variant="standard"
          type="time"
          className="info-field-text"
          sx={{ width: "300px" }}
        />
        <TextField
          id="standard-basic"
          label=""
          variant="standard"
          type="time"
          className="info-field-text"
          sx={{ width: "300px" }}
        />
        <br />
        <span className="info-field-title">Services Offered</span>

        <br />
        <FormGroup className="info-check-list">
          <FormControlLabel
            control={<Checkbox />}
            label={<MediumLabel>Passenger Cars</MediumLabel>}
            checked={isEnabled}
            onChange={handleCheckboxChange}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={<MediumLabel>SUVs (Sport Utility Vehicles)</MediumLabel>}
            checked={isEnabled}
            onChange={handleCheckboxChange}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={<MediumLabel>Flat Tire Repair/Replacement</MediumLabel>}
            checked={isEnabled}
            onChange={handleCheckboxChange}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={<MediumLabel>Vans</MediumLabel>}
            checked={isEnabled}
            onChange={handleCheckboxChange}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={<MediumLabel>Motorcycles</MediumLabel>}
            checked={isEnabled}
            onChange={handleCheckboxChange}
          />
        </FormGroup>
      </div>
      <div className="info-field">
        <span className="info-field-title">Vehicle Categories</span>
        <FormGroup className="info-check-list">
          <FormControlLabel control={<Checkbox />} label="Towing Services" />
          <FormControlLabel control={<Checkbox />} label="Battery Services" />
          <FormControlLabel
            control={<Checkbox />}
            label="Flat Tire Repair/Replacement"
          />
          <FormControlLabel control={<Checkbox />} label="Brake Services" />
          <FormControlLabel
            control={<Checkbox />}
            label="Engine or Transmission Issues"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Fluid Leaks or Overheating"
          />
          <FormControlLabel
            control={<Checkbox />}
            label=" Electrical System Issues"
          />
          <FormControlLabel
            control={<Checkbox />}
            label=" Steering or Suspension Problems"
          />
        </FormGroup>
        <input
          type="button"
          value="Save"
          className="info-save"
          onClick={handleSaveButtonClick}
        />
        <LoadingButton
          size="small"
          color="secondary"
          onClick={handleClick}
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
          onClick={handleSaveButtonClick}
        >
          <span>Save</span>
        </LoadingButton>
        <input
          type="button"
          value="Discard"
          className="info-discard"
          onClick={handleSaveButtonClick}
        />
        <br />
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          message="Saved the Details "
          action={action}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        />
      </div>
    </Box>
  );
};

export default Info;
