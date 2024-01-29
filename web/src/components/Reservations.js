import React, { useState, useEffect } from "react";
import "../styles/Reservation.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {
  createTheme,
  ThemeProvider,
  getContrastRatio,
} from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Accordion, Card } from "react-bootstrap";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import axios from "axios";

function Reservations() {
  const [output, setOutput] = useState("");
 

  //add accepted default reservation
  const [customerName, setCustomerName] = useState("");
  const [reservationtTime, setReservationTime] = useState("");
  const [description, setDescription] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [reservationDate, setReservationDate] = useState("");
  const [data,setData]=useState([]);




  const theme = createTheme({
    typography: {
      fontFamily: "Roboto, sans-serif",
    },
    palette: {
      primary: {
        main: "#09BEB1",
        contrastText:
          getContrastRatio("#09BEB1", "#fff") > 4.5 ? "#fff" : "#111",
      },
    },
  });

  const [value, setValue] = React.useState(dayjs("2023-01-31"));

  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const handleDayClick = (date) => {
    localStorage.setItem("resDate", date);
    console.log("Clicked date:", date);
   
  };

  function reservationList(date) {
    return (
      <div className="reservationList">
        <p>Selected Date: {date}</p>
      </div>
    );
  }

  const fetchReservations = async (date) => {

    const formattedDate = dayjs(date).format('YYYY-MM-DD');

    try {
      const response = await axios.get(
        `http://localhost:4000/api/reservation/filter/${formattedDate}`
      );
      console.log("Response Data:", response.data);
      const responseData = response.data;

      // If responseData is an array of objects
      const reservationsJSX = responseData.map((item, index) => (
        <div className="reservationList" key={index}>
          <p>Model: {item.vehicleType}</p>
          <p>Description: {item.description}</p>
        </div>
      ));

      // Set the state variable to display fetched reservations
      setOutput(reservationsJSX);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //load data from database to Accepted reservation

  useEffect(()=>{
    const apiUrl = 'http://localhost:4000/api/reservation/filter/2023-01-31'; // Replace with your actual endpoint

    // Make a GET request using Axios
    axios.get(apiUrl)
      .then(response => {
        // Handle the data received from the backend
        setData(response.data);
      })
      .catch(error => {
        
        console.error('Error fetching data:', error);
      });
  },[]);



  return (
    <div class="container-reservation">
      <div class="column-1">
        <p class="res-titleBar">
          <span class="container-title">Request</span>
        </p>

        <div class="column-3">
          <div class="innerColumn-1">
            <p class="circle-kawishka"></p>
            <p>
              <center>
                <span class="container-title">john Smith</span>
              </center>
            </p>
          </div>
          <div class="innerColumn-1">
            <p>
              <span class="container-title">Date</span>
              <br />
              10/11/2023
            </p>
            <p>
              <span class="container-title">Vehicle</span>
              <br />
              Prius
            </p>
          </div>
          <div class="innerColumn-1">
            <p>
              <span class="container-title">Time</span>
              <br />
              10.00 AM
            </p>
            <p>
              <span class="container-title">Contact</span>
              <br />
              0778149714
            </p>
          </div>
          <div class="innerColumn-1">
            <Stack spacing={2} direction="row">
              <Button
                variant="contained"
                style={{
                  textTransform: "none",
                  color: "white",
                  width: "100px",
                }}
              >
                Accept
              </Button>
            </Stack>
            <br />
            <Stack spacing={2} direction="row">
              <Button
                variant="contained"
                color="error"
                style={{
                  textTransform: "none",
                  color: "white",
                  width: "100px",
                }}
              >
                Decline
              </Button>
            </Stack>
            <br />
            <Stack spacing={2} direction="row">
              <Button
                className="service-button"
                style={{ textTransform: "none" }}
                endIcon={<KeyboardArrowDownIcon />}
                onClick={toggleAccordion}
              >
                Service
              </Button>
            </Stack>

            {isAccordionOpen && (
              <div className="service-accordion">
                <Card className="service-accordion-card">
                  <Card.Body>
                    <Accordion defaultActiveKey="0">
                      Have some battery issue
                      <br />
                      <br />
                      <button
                        className="service-button"
                        onClick={toggleAccordion}
                      >
                        Close
                      </button>
                    </Accordion>
                  </Card.Body>
                </Card>
              </div>
            )}
          </div>
        </div>

        <div class="column-3">
          <div class="innerColumn-1">
            <p class="circle-kawishka"></p>
            <p>
              <center>
                <span class="container-title">john Smith</span>
              </center>
            </p>
          </div>
          <div class="innerColumn-1">
            <p>
              <span class="container-title">Date</span>
              <br />
              10/11/2023
            </p>
            <p>
              <span class="container-title">Vehicle</span>
              <br />
              Prius
            </p>
          </div>
          <div class="innerColumn-1">
            <p>
              <span class="container-title">Time</span>
              <br />
              10.00 AM
            </p>
            <p>
              <span class="container-title">Contact</span>
              <br />
              0778149714
            </p>
          </div>
          <div class="innerColumn-1">
            <Stack spacing={2} direction="row">
              <Button
                variant="contained"
                style={{
                  textTransform: "none",
                  color: "white",
                  width: "100px",
                }}
              >
                Accept
              </Button>
            </Stack>
            <br />
            <Stack spacing={2} direction="row">
              <Button
                variant="contained"
                color="error"
                style={{
                  textTransform: "none",
                  color: "white",
                  width: "100px",
                }}
              >
                Decline
              </Button>
            </Stack>
            <br />

            <Button>Service</Button>
          </div>
        </div>
        <div class="column-3">
          <div class="innerColumn-1">
            <p class="circle-kawishka"></p>
            <p>
              <center>
                <span class="container-title">john Smith</span>
              </center>
            </p>
          </div>
          <div class="innerColumn-1">
            <p>
              <span class="container-title">Date</span>
              <br />
              10/11/2023
            </p>
            <p>
              <span class="container-title">Vehicle</span>
              <br />
              Prius
            </p>
          </div>
          <div class="innerColumn-1">
            <p>
              <span class="container-title">Time</span>
              <br />
              10.00 AM
            </p>
            <p>
              <span class="container-title">Contact</span>
              <br />
              0778149714
            </p>
          </div>
          <div class="innerColumn-1">
            <Stack spacing={2} direction="row">
              <Button
                variant="contained"
                style={{
                  textTransform: "none",
                  color: "white",
                  width: "100px",
                }}
              >
                Accept
              </Button>
            </Stack>
            <br />
            <Stack spacing={2} direction="row">
              <Button
                variant="contained"
                color="error"
                style={{
                  textTransform: "none",
                  color: "white",
                  width: "100px",
                }}
              >
                Decline
              </Button>
            </Stack>
            <br />

            <Button>Service</Button>
          </div>
        </div>
      </div>

      <div class="column-2">
        <div class="calenderContainer">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateCalendar", "DateCalendar"]}>
              <DemoItem label="Calendar">
                <DateCalendar
                  value={value}
                  onChange={fetchReservations}
                  onClickDay={fetchReservations}
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>

          <div className="reservationList-container">{output}</div>
        </div>

        <div class="reservationContainer">
          <p class="res-titleBar">
            <span class="container-title">Accepted</span>
          </p>

          {data.map((item)=>(
          <div class="column-4" key={item._id}>
            <div class="innerRow-1">

                  <div class="item-1">{item.customerName}</div>
                  <div class="item-1"> {item.vehicleType}</div>
                  <div class="item-1">{new Intl.DateTimeFormat('en-GB').format(new Date(item.reservationtDate))}</div>
                 {/* <div class="item-1">{item.reservationtDate}</div>*/}
                  <div class="item-1">{item.reservationtTime}</div>
                  <div style={{ marginRight: "20px" }}>
                    <CheckCircleOutlineIcon style={{ color: "#09BEB1" }} />
                  </div>
                  <div>
                    <DeleteIcon style={{ color: "red" }} />
                  </div>

              
            </div>
            <div class="innerRow-2">{item.description}</div>
          </div>
          ))}
{/*
          <div class="column-4">
            <div class="innerRow-1">
              <div class="item-1"> Alice Smith</div>
              <div class="item-1"> Toyota Chammy</div>
              <div class="item-1">10/11/2023</div>
              <div class="item-1"> 16.00 pm</div>
              <div style={{ marginRight: "20px" }}>
                <CheckCircleOutlineIcon style={{ color: "#09BEB1" }} />
              </div>
              <div>
                <DeleteIcon style={{ color: "red" }} />
              </div>
            </div>
            <div class="innerRow-2">have a Electrical problem</div>
          </div>

          <div class="column-4">
            <div class="innerRow-1">
              <div class="item-1"> Alice Smith</div>
              <div class="item-1"> Toyota Chammy</div>
              <div class="item-1">10/11/2023</div>
              <div class="item-1"> 16.00 pm</div>
              <div style={{ marginRight: "20px" }}>
                <CheckCircleOutlineIcon style={{ color: "#09BEB1" }} />
              </div>
              <div>
                <DeleteIcon style={{ color: "red" }} />
              </div>
            </div>
            <div class="innerRow-2">have a Electrical problem</div>
          </div>
          */}
        </div>
      </div>
    </div>
  );
}

export default Reservations;
