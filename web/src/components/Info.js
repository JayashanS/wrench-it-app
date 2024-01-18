import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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
  const [loading, setLoading] = React.useState(false);

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

  const handleSaveButtonClick = async () => {
    setLoading(true);
    console.log("handleSaveButtonClick function is called");
    try {
      const response = await axios.get(
        "http://localhost:4000/api/garage/123456789"
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
          `http://localhost:4000/api/garage/123456789`,
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
        "http://localhost:4000/api/garage/123456789"
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
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  return (
    <div className="info-container">
      <div className="info-row-1">
        <div className="info-row-1-column">
          <span className="info-title">Ownership Details</span>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 2, width: "50ch", fontSize: "20px" },
              "& .info-field-text:not(:last-child)": { mb: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Owner Name"
              variant="outlined"
              size="small"
              className="info-field-text"
              value={ownerName}
              onChange={handleOwnerNameChange}
              sx={{ width: "400px" }}
            />
            <TextField
              id="outlined-basic"
              label="Owner NIC"
              variant="outlined"
              size="small"
              className="info-field-text"
              value={ownerNIC}
              onChange={handleOwnerNICChange}
              sx={{ width: "300px" }}
            />
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              size="small"
              className="info-field-text"
              value={street}
              onChange={handleStreetChange}
              sx={{ width: "400px" }}
            />
            <TextField
              id="outlined-basic"
              label="Street Address"
              variant="outlined"
              size="small"
              className="info-field-text"
              value={street}
              onChange={handleStreetChange}
              sx={{ width: "400px" }}
            />
            <TextField
              id="outlined-basic"
              label="City or Locality"
              variant="outlined"
              size="small"
              className="info-field-text"
              value={city}
              onChange={handleCityChange}
              sx={{ width: "400px" }}
            />
            <TextField
              id="outlined-basic"
              label="State"
              variant="outlined"
              size="small"
              className="info-field-text"
              value={state}
              onChange={handleStateChange}
              sx={{ width: "400px" }}
            />
            <TextField
              id="outlined-basic"
              label="Postal Code"
              variant="outlined"
              size="small"
              type="text"
              className="info-field-text"
              value={postalCode}
              onChange={handlePostalCodeChange}
              sx={{ width: "400px" }}
            />
          </Box>
        </div>
        <div className="info-row-1-column">
          <span className="info-title">Repair Center Details</span>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 2, width: "50ch", fontSize: "20px" },
              "& .info-field-text:not(:last-child)": { mb: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Repair Center Name"
              variant="outlined"
              size="small"
              className="info-field-text"
              value={repairCenterName}
              onChange={handleRepairCenterNameChange}
              sx={{ width: "400px" }}
            />
            <TextField
              id="outlined-basic"
              label="Number Of Workers"
              type="number"
              variant="outlined"
              size="small"
              className="info-field-text"
              value={numOfWorkers}
              onChange={handleNumOfWorkersChange}
              sx={{ width: "300px" }}
            />
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 2, width: "25ch", fontSize: "20px" },
              "& .info-field-text:not(:last-child)": { mb: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["TimeField"]}>
                <TimeField label="Opening Hours" size="small" />
              </DemoContainer>
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["TimeField"]}>
                <TimeField label="Closing Hours" size="small" />
              </DemoContainer>
            </LocalizationProvider>

            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">Status</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                label="Status"
              >
                <MenuItem value={1}>Registered</MenuItem>
                <MenuItem value={0}>Unregistered</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <div className="info-row-2">
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            style={{ width: "80px", color: "white" }}
            onClick={handleSaveButtonClick}
            disabled={loading}
          >
            Save
          </Button>
          <Button
            variant="contained"
            color="error"
            style={{ width: "80px", color: "white" }}
            onClick={() => console.log("Delete button clicked")} // Add your delete logic here
          >
            clear
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default Info;
