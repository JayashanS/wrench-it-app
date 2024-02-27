import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/system";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "../styles/Info.css";

const Info = () => {
  const [email, setEmail] = useState();
  const [oname, setoname] = useState("");
  const [nic, setnic] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [repairCenterName, setRepairCenterName] = useState("");
  const [numOfWorkers, setNumOfWorkers] = useState("");
  const [openingHours, setOpeningHours] = useState("");
  const [closingHours, setClosingHours] = useState("");
  const [statuS, setstatuS] = useState(1);
  const [loading, setLoading] = React.useState(false);
  const [allDayService, setAllDayService] = useState(false);

  const handleonameChange = (event) => {
    setoname(event.target.value);
  };
  const handlenicChange = (event) => {
    setnic(event.target.value);
  };
  const handlePNumChange = (event) => {
    setPhoneNumber(event.target.value);
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
  const handleRepairCenterNameChange = (event) => {
    setRepairCenterName(event.target.value);
  };
  const handleNumOfWorkersChange = (event) => {
    setNumOfWorkers(event.target.value);
  };
  const handleOpeningHoursChange = (event) => {
    setOpeningHours(event.target.value);
  };

  const handleClosingHoursChange = (event) => {
    setClosingHours(event.target.value);
  };

  const handlestatuSChange = (event) => {
    setstatuS(event.target.value);
  };
  const MediumLabel = styled("div")({
    fontSize: "14px",
  });

  const handleSaveButtonClick = async () => {
    setLoading(true);
    console.log("handleSaveButtonClick function is called");
    try {
      const response = await axios.get(
        `http://localhost:4000/api/garage/${email}`
      );
      const existingData = response.data;

      const updatedData = {
        email,
        oname,
        nic,
        phoneNumber,
        street,
        city,
        state,
        postalCode,
        repairCenterName,
        numOfWorkers,
        openingHours,
        closingHours,
        allDayService,
        statuS,
      };

      const headers = {
        "Content-Type": "application/json",
      };

      console.log("Existing Data:", existingData);
      console.log("Updated Data:", updatedData);

      if (existingData.length === 0) {
        console.log("Creating New Document...");

        await axios.post("http://localhost:4000/api/garage", updatedData, {
          headers,
        });
        console.log("New document created successfully!");
      } else {
        await axios.put(
          `http://localhost:4000/api/garage/${email}`,
          updatedData,
          {
            headers,
          }
        );
        console.log("Document updated successfully!");
      }

      handleClick();
      setLoading(false);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/garage/${email}`
      );
      console.log("Response Data:", response.data);
      const responseData = response.data;

      setoname(responseData.oname);
      setnic(responseData.nic);
      setPhoneNumber(responseData.phoneNumber);
      setStreet(responseData.street);
      setCity(responseData.city);
      setState(responseData.state);
      setPostalCode(responseData.postalCode);
      setRepairCenterName(responseData.repairCenterName);
      setNumOfWorkers(responseData.numOfWorkers);
      setOpeningHours(responseData.openingHours);
      setClosingHours(responseData.closingHours);
      setAllDayService(responseData.allDayService);
      setstatuS(responseData.statuS);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setEmail(user.email);
    }
  }, []);

  useEffect(() => {
    if (email) {
      fetchData();
    }
  }, [email]);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

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
              value={oname}
              onChange={handleonameChange}
              sx={{ width: "400px" }}
            />
            <TextField
              id="outlined-basic"
              label="Owner NIC"
              variant="outlined"
              size="small"
              className="info-field-text"
              value={nic}
              onChange={handlenicChange}
              sx={{ width: "300px" }}
            />
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              size="small"
              className="info-field-text"
              value={phoneNumber}
              onChange={handlePNumChange}
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
              "& > :not(style)": { m: 2, width: "23.5ch", fontSize: "20px" },
              "& .info-field-text:not(:last-child)": { mb: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Opening Hours"
              size="small"
              value={openingHours}
              onChange={handleOpeningHoursChange}
            />

            <TextField
              label="Closing Hours"
              size="small"
              value={closingHours}
              onChange={handleClosingHoursChange}
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label={
                <MediumLabel>We Provide 24/7 Breaakdown Service</MediumLabel>
              }
              onChange={() => setAllDayService((prevValue) => !prevValue)}
              checked={allDayService}
            />
            <br />

            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">Status</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                label="Status"
                value={statuS}
                onChange={handlestatuSChange}
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
            onClick={() => console.log("Delete button clicked")}
          >
            clear
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default Info;
