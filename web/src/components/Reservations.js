import React, { useState, useEffect } from "react";
import "../styles/Reservation.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import axios from "axios";

function Reservations() {
  const [email, setEmail] = useState("");
  const [output, setOutput] = useState("");
  const [output2, setOutput_2] = useState("");
  const [data, setData] = useState([]);
  const currentDate = new Date();
  const formattedDate = dayjs(currentDate).format("YYYY-MM-DD");
  const [value, setValue] = React.useState(dayjs(formattedDate));

  useEffect(() => {
    const fetchEmailFromLocalStorage = () => {
      try {
        const userData = localStorage.getItem("user");
        if (userData) {
          const { email } = JSON.parse(userData);
          setEmail(email);
          fetchReservations(email);
        }
      } catch (error) {
        console.error("Error fetching email from LocalStorage:", error);
      }
    };

    fetchEmailFromLocalStorage();
  }, []);

  const decline_reservation = async (id) => {
    try {
      const updatedData = {
        reservationStatus: "Declined",
      };

      const response = await axios.put(
        `http://localhost:4000/api/reservation/${id}`,
        updatedData
      );

      console.log("Update successful:", response.data);
      getPendingReservations();
    } catch (error) {
      console.error("Error updating reservation:", error);
    }
  };

  const accept_reservation = async (id) => {
    try {
      const updatedData = {
        reservationStatus: "Accepted",
      };

      const response = await axios.put(
        `http://localhost:4000/api/reservation/${id}`,
        updatedData
      );

      console.log("Accept successful:", response.data);

      accept_reservation();
      getPendingReservations();
      fetchAcceptedReservationsData();
    } catch (error) {
      console.error("Error accept reservation:", error);
    }
  };

  const getPendingReservations = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/reservation/pending/${email}`
      );
      console.log("Response Data:", response.data);
      const responseData = response.data;

      const reservationsJSX = responseData.map((item, index) => (
        <div class="column-3" key={index}>
          <div class="innerColumn-1">
            <p>
              <span class="container-title">Customer Name</span>
              <br />
              {item.customerName}
            </p>
            <p>
              <span class="container-title">Vehicle</span>
              <br />
              {item.vehicleType}
            </p>
            <p>
              <span class="container-title">Service</span>
              <br />
              {item.description}
            </p>
          </div>
          <div class="innerColumn-1">
            <p>
              <span class="container-title">Time</span>
              <br />
              {item.reservationtTime}
            </p>
            <p>
              <span class="container-title">Date</span>
              <br />
              {new Intl.DateTimeFormat("en-GB").format(
                new Date(item.reservationtDate)
              )}
            </p>
            <p>
              <span class="container-title">Contact</span>
              <br />
              {item.contactNo}
            </p>
          </div>
          <div class="innerColumn-1">
            <br />
            <Stack spacing={2} direction="row">
              <Button
                onClick={() => accept_reservation(item._id)}
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
            <br />
            <Stack spacing={2} direction="row">
              <Button
                onClick={() => decline_reservation(item._id)}
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
          </div>
        </div>
      ));

      setOutput_2(reservationsJSX);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // fetch data
  const fetchReservations = async (date) => {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");

    try {
      const response = await axios.get(
        `http://localhost:4000/api/reservation/filter/${formattedDate}/${email}`
      );
      console.log("Response Data:", response.data);
      const responseData = response.data;

      // If responseData is an array of objects
      const reservationsJSX = responseData.map((item, index) => (
        <div className="reservationList" key={index}>
          <p>Model: {item.vehicleType}</p>
          <p>Description: {item.description}</p>
          <p>Time: {item.reservationtTime}</p>
        </div>
      ));

      // Set the state variable to display fetched reservations
      setOutput(reservationsJSX);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchAcceptedReservationsData = async () => {
    const currentDate = new Date();
    const fDate = dayjs(currentDate).format("YYYY-MM-DD");

    const apiUrl = `http://localhost:4000/api/reservation/filter/${fDate}/${email}`;

    try {
      const response = await axios.get(apiUrl);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching accepted reservations data:", error);
    }
  };

  useEffect(() => {
    fetchAcceptedReservationsData();
  }, [email]);

  useEffect(() => {
    getPendingReservations();
  }, [email]);

  const complete_reservation = async (id) => {
    try {
      const updatedData = {
        reservationStatus: "Completed",
      };
      const response = await axios.put(
        `http://localhost:4000/api/reservation/${id}`,
        updatedData
      );
      setData((prevData) => prevData.filter((item) => item._id !== id));
      console.log("Update successful:", response.data);
    } catch (error) {
      console.error("Error updating reservation:", error);
    }
  };

  const deleteReservation = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/reservation/${id}`);
      setData((prevData) => prevData.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting reservation:", error);
    }
  };

  return (
    <div class="container-reservation">
      <div class="column-1">
        <div class="res-title">
          <span class="container-title">Pending Reservations</span>
        </div>

        {output2}
      </div>

      <div class="column-2">
        <div class="res-title">
          <span class="container-title">Accepted Reservations by Date</span>
        </div>
        <div class="calenderContainer">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateCalendar", "DateCalendar"]}>
              <DemoItem>
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
          <div class="res-title">
            <span class="container-title">Accepted Reservations on Today</span>
          </div>

          {data.map((item) => (
            <div class="column-4" key={item._id}>
              <div class="innerRow-1">
                <div class="item-1">{item.customerName}</div>
                <div class="item-1"> {item.vehicleType}</div>
                <div class="item-1">
                  {new Intl.DateTimeFormat("en-GB").format(
                    new Date(item.reservationtDate)
                  )}
                </div>
                <div class="item-1">{item.reservationtTime}</div>
                <div style={{ marginRight: "20px" }}>
                  <CheckCircleOutlineIcon
                    style={{ color: "#09BEB1" }}
                    onClick={() => complete_reservation(item._id)}
                  />
                </div>

                <div>
                  <DeleteIcon
                    style={{ color: "red" }}
                    onClick={() => deleteReservation(item._id)}
                  />
                </div>
              </div>
              <div class="innerRow-2">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reservations;
