import React, { useState, useEffect } from "react";
import { Accordion, Card, Form } from "react-bootstrap";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import PrintBill from "./PrintBill";
import AddForm from "./AddFrom";
import "../styles/Repair.css";

function Repair() {
  const [email, setEmail] = useState();
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isPartsFormOpen, setIsPartsFormOpen] = useState(false);
  const [isBillFormOpen, setIsBillFormOpen] = useState(false);

  //const [isPartsTableOpen, setIsPartsTableOpen] = useState(false);

  const [repairId, setRepairId] = useState("");
  const [licensePlateNo, setlicensePlateNo] = useState("");
  const [model, setmodel] = useState("");
  const [fault, setfault] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [date, setdate] = useState("");
  const [phoneNo, setphoneNo] = useState("");
  const [phoneNoError, setPhoneNoError] = useState("");
  const [status, setstatus] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [showErrorMessageBox, setShowErrorMessageBox] = useState(false);

  // Add part form
  const [partId, setPartId] = useState("");
  const [partName, setPartName] = useState("");
  const [unitPrice, setUnitPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [partsData, setPartsData] = useState([]);
  const calculateTotalPrice = () => {
    return unitPrice * quantity;
  };
  // State variables for "Billing" section
  const [selectedRepairId, setSelectedRepairId] = useState("");
  const [selectedLicensePlateNo, setSelectedLicensePlateNo] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedDiagnosis, setSelectedDiagnosis] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  //services
  const [selectedServices, setSelectedServices] = useState([]);
  const [cost, setCost] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

<<<<<<< Updated upstream
  const toggleAccordion = () => {
=======
  
 const toggleAccordion = () => {
>>>>>>> Stashed changes
    setIsAccordionOpen(!isAccordionOpen);
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const togglePartsForm = () => {
    setIsPartsFormOpen(!isPartsFormOpen);
  };

  const toggleBill = () => {
    setIsBillFormOpen(!isBillFormOpen);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setEmail(user.email);
      fetchData(user.email);
    }
  }, []);

  const fetchData = async (email) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/repair/get/${email}`
      );
      const jsonData = await response.json();
      setData(sortData(jsonData));
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  //handlesubmit of repair details

  const handleSubmit = async (e) => {
    console.log("button clicked");
    e.preventDefault();

    // Check if all required fields are filled
    if (
      repairId === "" ||
      licensePlateNo === "" ||
      model === "" ||
      fault === "" ||
      date === "" ||
      status === ""
    ) {
      setShowErrorMessageBox(true);
      return;
    }
    if (!validatePhoneNo(phoneNo)) {
      setPhoneNoError("Please enter a valid phone number !");
      return;
    }
    if (!validateUserEmail(userEmail)) {
      setEmailError("Please enter a valid NIC !");
      return;
    }
    const repair = {
      repairId,
      licensePlateNo,
      model,
      fault,
      userEmail,
      date,
      phoneNo,
      status,
    };
    console.log("Form Data:", repair);

    const response = await fetch(
      `http://localhost:4000/api/repair/create/${email}`,
      {
        method: "POST",
        body: JSON.stringify(repair),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("button clicked");

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setData((prevData) => [...prevData, json]);

      setRepairId("");
      setlicensePlateNo("");
      setmodel("");
      setfault("");
      setUserEmail("");
      setdate("");
      setphoneNo("");
      setstatus("");
      setError(null);
      console.log("new workout added", json);
    }
  };
  //Delete button function

  const handleDelete = async (repairId) => {
    try {
      await fetch(`http://localhost:4000/api/repair/${repairId}`, {
        method: "DELETE",
      });

      setData((prevData) => prevData.filter((item) => item._id !== repairId));
    } catch (error) {
      console.error("Error deleting data: ", error);
    }
  };

  //load data from database to Repair table

  const sortData = (data = [], sortBy = "repairId", ascending = true) => {
    return data.sort((a, b) => {
      const aValue = a[sortBy] ?? "";
      const bValue = b[sortBy] ?? "";
      return ascending
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    });
  };

  //handlsubmit of Addparts

  const handlePartSubmit = async (e) => {
    e.preventDefault();

    const totalPrice = calculateTotalPrice();

    const newPartData = {
      partId,
      partName,
      unitPrice,
      quantity,
      totalPrice,
    };
    setPartsData((prevPartsData) => [...prevPartsData, newPartData]);
    setTotalCost(calculateTotalCost());

    try {
      const response = await fetch("http://localhost:4000/api/parts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPartData),
      });

      if (response.ok) {
        console.log("Part added successfully");
      } else {
        const errorData = await response.json();
        console.error("Error adding part:", errorData.error);
      }
    } catch (error) {
      console.error("Error adding part:", error);
    }
  };

  const handleServiceSelection = (e) => {
    const selectedService = e.target.value;
    setSelectedServices((prevServices) => [...prevServices, selectedService]);

    // Calculate and set total cost
    setTotalCost(calculateTotalCost());
  };

  //send data to textfield
  const handleRowClick = (item) => {
    setSelectedRepairId(item.repairId);
    setSelectedLicensePlateNo(item.licensePlateNo);
    setSelectedModel(item.model);
    setSelectedDiagnosis(item.diagnosis);
    setSelectedDate(item.date);
  };

  // Calculate total cost function
  const calculateTotalCost = () => {
    const partsTotal = partsData.reduce(
      (acc, item) => acc + item.totalPrice,
      0
    );
    return partsTotal + parseFloat(cost);
  };

  //refresh the billing section
  const handleRefreshBilling = () => {
    setSelectedServices([]);
    setCost(0);
    setTotalCost(0);
    setPartId("");
    setPartName("");
    setUnitPrice(0);
    setQuantity(0);
    setPartsData([]);
  };
  const validatePhoneNo = (phone) => {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
  };

  const validateUserEmail = (nic) => {
    return true;
  };

  //begining of the page
  return (
    <div class="RepairPage">
      <div class="RepairContainer1">
        <h2>Details</h2>
        <hr />
        <br />

        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            onClick={toggleAccordion}
            style={{ color: "white", textTransform: "none" }}
          >
            Add new Repair Record{" "}
          </Button>
          <Button
            variant="contained"
            onClick={handleOpenDialog}
            style={{ color: "white", textTransform: "none" }}
          >
            Add From{" "}
          </Button>
        </Stack>
        <Dialog
          open={dialogOpen}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>Add New Repair Record From</DialogTitle>
          <DialogContent>
            <AddForm garageId="yourGarageId" />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Close</Button>
          </DialogActions>
        </Dialog>

        <br />
        <br />
        {isAccordionOpen && (
          //Add new Repair form

          <div className="Add-new-Form">
            <Card className="Add-New-Form-card">
              <Card.Body>
                <h2>Repair Information Form</h2>
                {showErrorMessageBox && (
                  <div className="error-message-box">
                    Please fill in all the required fields before submitting the
                    form.
                  </div>
                )}
                <form id="repairForm" onSubmit={handleSubmit}>
                  <label for="repairId">Repair ID:</label>
                  <input
                    type="text"
                    id="repairId"
                    name="repairId"
                    onChange={(e) => setRepairId(e.target.value)}
                    value={repairId}
                    required
                  />

                  <label for="licensePlateNo">License Plate No:</label>
                  <input
                    type="text"
                    id="licensePlateNo"
                    name="licensePlateNo"
                    onChange={(e) => setlicensePlateNo(e.target.value)}
                    value={licensePlateNo}
                    required
                  ></input>

                  <label for="model">Model:</label>
                  <input
                    type="text"
                    id="model"
                    name="model"
                    onChange={(e) => setmodel(e.target.value)}
                    value={model}
                    required
                  />

                  <label for="fault">Fault:</label>
                  <textarea
                    id="fault"
                    name="fault"
                    rows="4"
                    onChange={(e) => setfault(e.target.value)}
                    value={fault}
                    required
                    style={{ width: "300px" }}
                  ></textarea>

                  <label for="NIC">User Email</label>
                  <input
                    type="text"
                    id="NIC"
                    name="NIC"
                    onChange={(e) => {
                      setUserEmail(e.target.value);
                      setEmailError("");
                    }}
                    value={userEmail}
                    required
                  />
                  {emailError && (
                    <div
                      className="error"
                      style={{ color: "red", marginTop: "5px" }}
                    >
                      {emailError}
                    </div>
                  )}
                  <label for="phoneNo">Phone No:</label>
                  <input
                    type="tel"
                    id="phoneNo"
                    name="phoneNo"
                    onChange={(e) => {
                      setphoneNo(e.target.value);
                      setPhoneNoError("");
                    }}
                    value={phoneNo}
                    required
                  />
                  {phoneNoError && (
                    <div
                      className="error"
                      style={{ color: "red", marginTop: "5px" }}
                    >
                      {phoneNoError}
                    </div>
                  )}
                  <label for="date">Date:</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    onChange={(e) => setdate(e.target.value)}
                    value={date}
                    required
                  />

                  <label for="status">Status:</label>
                  <select
                    id="status"
                    name="status"
                    onChange={(e) => setstatus(e.target.value)}
                    value={status}
                    required
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                  <div className="button-container">
                    <button onClick={handleSubmit}>Submit</button>
                    <button onClick={() => setIsAccordionOpen(false)}>
                      Close
                    </button>
                  </div>
                </form>

                <Accordion defaultActiveKey="0">
                  <br />
                </Accordion>
              </Card.Body>
            </Card>
          </div>
          // End of the Add repair form
        )}

        {/*Repair table */}
        <table class="Repair">
          <thead>
            <tr>
              <th>Repair ID</th>
              <th>License Plate Number</th>
              <th>Model</th>
              <th>Fault</th>
              <th>User Email</th>
              <th>Phone Number</th>
              <th>Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id} onClick={() => handleRowClick(item)}>
                <td>{item.repairId}</td>
                <td>{item.licensePlateNo}</td>
                <td>{item.model}</td>
                <td>{item.fault}</td>
                <td>{item.userEmail}</td>
                <td>{item.phoneNo}</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
                <td>
                  {" "}
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*Billing section----- */}

      <div class="RepairContainer2">
        <h2>Billing</h2>
        <hr />

        <div class="RepairDetails">
          <label for="repairId">Repair ID:</label>
          <input
            type="text"
            id="repairId"
            name="repairId"
            onChange={(e) => setRepairId(e.target.value)}
            value={selectedRepairId}
            required
          />
          <label for="licensePlateNo">License Plate No:</label>
          <input
            type="text"
            id="licensePlateNo"
            name="licensePlateNo"
            onChange={(e) => setlicensePlateNo(e.target.value)}
            value={selectedLicensePlateNo}
            required
          ></input>

          <label for="Model">Model:</label>
          <input
            type="text"
            id="Model"
            name="Model"
            onChange={(e) => setmodel(e.target.value)}
            value={selectedModel}
            required
          ></input>

          <label for="Diagnosis">Diagnosis:</label>
          <textarea
            id="selectedDiagnosis"
            name="selectedDiagnosis"
            rows="4"
            onChange={(e) => setSelectedDiagnosis(e.target.value)}
            value={selectedDiagnosis}
            required
            style={{ width: "300px" }}
          ></textarea>

          <label for="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={(e) => setdate(e.target.value)}
            value={date}
            required
          />
          <tr>
            <td>Parts</td>
            <td>
              <Stack spacing={2} direction="row">
                <Button
                  variant="contained"
                  onClick={togglePartsForm}
                  style={{ color: "white", textTransform: "none" }}
                >
                  Add new Parts{" "}
                </Button>
              </Stack>

              {isPartsFormOpen && (
                //Add new parts form

                <div className="Add-new-parts-Form">
                  <Card className="Add-New-parts-card">
                    <Card.Body>
                      <h2>Add Parts</h2>
                      <form onSubmit={handlePartSubmit} method="post">
                        <label for="partId">part Id:</label>
                        <input
                          type="text"
                          value={partId}
                          name="partId"
                          onChange={(e) => setPartId(e.target.value)}
                        ></input>

                        <label for="partName">Part Name:</label>
                        <input
                          type="text"
                          value={partName}
                          name="part"
                          onChange={(e) => setPartName(e.target.value)}
                        ></input>

                        <label for="quantity">Quantity:</label>
                        <input
                          type="number"
                          value={quantity}
                          onChange={(e) =>
                            setQuantity(parseInt(e.target.value, 10))
                          }
                          required
                        ></input>

                        <label for="price">Unit Price:</label>
                        <input
                          type="number"
                          value={unitPrice}
                          onChange={(e) =>
                            setUnitPrice(parseFloat(e.target.value))
                          }
                        ></input>

                        <label for="totalPrice">Total Price:</label>
                        <Form.Control
                          type="text"
                          readOnly
                          value={calculateTotalPrice()}
                          style={{ color: "red" }}
                        />
                        <div className="button-container2">
                          <button type="submit">Submit</button>
                          <button onClick={() => setIsPartsFormOpen(false)}>
                            Close
                          </button>
                        </div>
                      </form>

                      <Accordion defaultActiveKey="0">
                        <br />
                      </Accordion>
                    </Card.Body>
                  </Card>
                </div>
              )}
            </td>
          </tr>
        </div>
        <br />

        {/*Bill printing--------------*/}

        {isBillFormOpen && (
          <PrintBill
            partsData={partsData}
            invoiceDate={date}
            selectedServices={selectedServices}
            serviceCost={cost}
            selectedRepairId={selectedRepairId}
            selectedLicensePlateNo={selectedLicensePlateNo}
            selectedModel={selectedModel}
          />
        )}

        {/*parts table--------------- */}
        {isPartsFormOpen && (
          <div className="Add-new-parts-Table">
            <Card className="Add-New-parts-card-Table">
              <Card.Body>
                <table class="parts">
                  <thead>
                    <tr>
                      <th>part</th>
                      <th>quantity</th>
                      <th>price</th>
                      <th>Total price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {partsData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.partName}</td>
                        <td>{item.quantity}</td>
                        <td>Rs.{item.unitPrice.toFixed(2)}</td>
                        <td>Rs.{item.totalPrice.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card.Body>
            </Card>
          </div>
        )}
        <hr />

        <h2>Services</h2>
        <table className="services">
          <tr>
            <td>
              <select
                id="selectedServices"
                name="selectedServices"
                onChange={handleServiceSelection}
                value={selectedServices}
              >
                <option value="Suspension Repairs">Suspension Repairs</option>
                <option value="Transmission Issues">Transmission Issues</option>
                <option value="Electrical">Electrical</option>
                <option value="Electronic">Electronic</option>
                <option value="Body Repairs & Painting">
                  Body Repairs & Painting
                </option>
                <option value="Breakdown Repair and Services">
                  Breakdown Repair and Services
                </option>
                <option value="Engine">Engine</option>
                <option value="Scanning">Scanning</option>
                <option value="HV System">HV System</option>
                <option value="Brake Services and Maintenance">
                  Brake Services and Maintenance
                </option>
              </select>
            </td>
            <td>
              <label for="cost">Cost:</label>
              <input
                type="number"
                onChange={(e) => setCost(parseFloat(e.target.value))}
                value={cost}
                required
              ></input>
            </td>
          </tr>
        </table>
        <hr />

        <h2>Total cost</h2>
        <label style={{ color: "red", fontSize: "18px" }}>
          {calculateTotalCost()}
        </label>
        <Stack spacing={1} direction="column">
          <Button
            variant="contained"
            onClick={handleRefreshBilling}
            style={{ color: "white", textTransform: "none" }}
          >
            Refresh Billing
          </Button>
          <Button
            variant="contained"
            onClick={toggleBill}
            style={{ color: "white", textTransform: "none", marginTop: "20px" }}
          >
            Print Bill
          </Button>
        </Stack>
      </div>
    </div>
  );
  //invoice
}

export default Repair;
