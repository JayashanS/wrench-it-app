import React, { useState, useEffect } from "react";
import { Tabs, Tab, Button } from "@mui/material";
import axios from "axios";

const AddForm = ({ garageId }) => {
  const [value, setValue] = useState(0);
  const [reservations, setReservations] = useState([]);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/reservation/garage/${garageId}`)
      .then((response) => setReservations(response.data))
      .catch((error) => console.error("Error fetching reservations:", error));
    axios
      .get(`http://localhost:4000/api/request/garage/${garageId}`)
      .then((response) => setRequests(response.data))
      .catch((error) => console.error("Error fetching requests:", error));
  }, [garageId]);

  const handleSendToRepair = (record) => {
    axios
      .post(`http://localhost:4000/api/repair/create/${garageId}`, record)
      .then((response) => {
        console.log("Data sent to repair:", response.data);
      })
      .catch((error) => console.error("Error sending data to repair:", error));
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange} aria-label="AddForm Tabs">
        <Tab label="Reservations" />
        <Tab label="Requests" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <table className="Repair">
          <thead>
            <tr>
              <th>License Plate Number</th>
              <th>Model</th>
              <th>Fault</th>
              <th>Phone Number</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation._id}>
                <td>{reservation.licensePlateNo}</td>
                <td>{reservation.model}</td>
                <td>{reservation.fault}</td>
                <td>{reservation.phoneNo}</td>
                <td>{reservation.date}</td>
                <td>
                  <Button
                    variant="contained"
                    onClick={() => handleSendToRepair(reservation)}
                  >
                    Send to Repair
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <table className="Repair">
          <thead>
            <tr>
              <th>License Plate Number</th>
              <th>Model</th>
              <th>Fault</th>
              <th>Phone Number</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.requestId}>
                <td>{request.licensePlateNo}</td>
                <td>{request.model}</td>
                <td>{request.fault}</td>
                <td>{request.phoneNo}</td>
                <td>{request.date}</td>
                <td>
                  <Button
                    variant="contained"
                    onClick={() => handleSendToRepair(request)}
                  >
                    Send to Repair
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TabPanel>
    </div>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

export default AddForm;
