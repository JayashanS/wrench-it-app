import React, { useState,useEffect } from "react";
import { Accordion, Card,Form } from "react-bootstrap";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../styles/Repair.css";

function Repair() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isPartsFormOpen, setIsPartsFormOpen] = useState(false);
  const [repairId, setRepairId] = useState("");
  const [licensePlateNo, setlicensePlateNo] = useState("");
  const [model, setmodel] = useState("");
  const [fault, setfault] = useState("");
  const [NIC, setNIC] = useState("");
  const [date, setdate] = useState("");
  const [phoneNo, setphoneNo] = useState("");
  const [status, setstatus] = useState("");
  const [error, setError] = useState(null);
  const [data,setData]=useState([]);
// Add part form
  const [partId, setPartId] = useState("");
  const [partName, setPartName] = useState("");
  const [unitPrice, setUnitPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [partsData, setPartsData] = useState([]);
  const calculateTotalPrice = () => {
    return unitPrice * quantity;
  };

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  const togglePartsForm = () => {
    setIsPartsFormOpen(!isPartsFormOpen);
  };

  //handlesubmit of repair details
  const handleSubmit = async (e) => {
    console.log("button clicked");
    e.preventDefault();
    const repair = {
      repairId,
      licensePlateNo,
      model,
      fault,
      NIC,
      date,
      phoneNo,
      status,
    };
    console.log("Form Data:", repair);

    const response = await fetch("http://localhost:4000/api/repair/", {
      method: "POST",
      body: JSON.stringify(repair),
      headers: {
        "Content-Type": "application/json",
      },
    });
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
      setNIC("");
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
    

    useEffect(()=>{
      const fetchData=async()=>{
        try{
          const response = await fetch("http://localhost:4000/api/repair");
          const jsonData=await response.json();
          setData(sortData(jsonData));
        }catch(error){
          console.error("Error fetching data: ",error);

        }
      };
      fetchData();
    },[]);
    

    const sortData=(data=[],sortBy="repairId",ascending = true) => {
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
        </Stack>

        <br />
        <br />
        {isAccordionOpen && (

  //Add new Repair form

          <div className="Add-new-Form">
            <Card className="Add-New-Form-card">
              <Card.Body>
                <h2>Repair Information Form</h2>
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
                  ></textarea>

                  <label for="NIC">NIC:</label>
                  <input
                    type="text"
                    id="NIC"
                    name="NIC"
                    onChange={(e) => setNIC(e.target.value)}
                    value={NIC}
                    required
                  />

                  <label for="phoneNo">Phone No:</label>
                  <input
                    type="tel"
                    id="phoneNo"
                    name="phoneNo"
                    onChange={(e) => setphoneNo(e.target.value)}
                    value={phoneNo}
                    required
                  />

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

                  <button onClick={handleSubmit}>Submit</button>
                  {error && <div className="error">error</div>}
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
            <th>NIC</th>
            <th>Phone Number</th>
            <th>Date</th>
            <th>Status</th>
            <th></th>
            
          </tr>
          </thead>
          <tbody>
            {data.map((item)=>(
                <tr key={item._id}>
             <td>{item.repairId}</td>
              <td>{item.licensePlateNo}</td>
              <td>{item.model}</td>
              <td>{item.fault}</td>
              <td>{item.NIC}</td>
              <td>{item.phoneNo}</td>
              <td>{item.date}</td>
              <td>{item.status}</td>
              <td> <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </Button></td>
                </tr>

            ))}
          </tbody>
        </table>
      </div>
      
  
    {/*Billing section----- */}

      <div class="RepairContainer2">
        <h2>Billing</h2>
        <hr />
        <br />
        <br />
        <table class="RepairDetails">
          <tr>
            <td>Repair ID</td>
            <td>R001</td>
          </tr>
          <tr>
            <td>Vehicle</td>
            <td>Honda civic</td>
          </tr>
          <tr>
            <td>Diagnosis</td>
            <td>
              From analyzing symptoms to conducting specific tests, the
              diagnostic report outlines findings and proposes precise actions
              for resolution. It succinctly communicates the identified issue
            </td>
          </tr>
          <tr>
            <td>Date</td>
            <td>09-01-2024</td>
          </tr>
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
                          
                          required
                        ></input>

                        <label for="quantity">Quantity:</label>
                        <input
                          type="number"
                          value={quantity}
                          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                        ></input>

                        <label for="price">Unit Price:</label>
                        <input
                          type="number"
                      
                          value={unitPrice}
                           onChange={(e) => setUnitPrice(parseFloat(e.target.value))}
                        ></input>

                        <label for="totalPrice">Total Price:</label>
                        <Form.Control type="text" readOnly value={calculateTotalPrice()}style={{ color: 'red' }} />

                        <button type="submit">Submit</button>
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
        </table>
        <br />

    {/*parts table--------------- */}

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
        <td>${item.unitPrice.toFixed(2)}</td>
        <td>${item.totalPrice.toFixed(2)}</td>
      </tr>
      ))}
        </tbody>
        </table>

        <hr />

        <h2>services</h2>

        <table class="services">
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>service1</td>
            <td>$50</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>service2</td>
            <td>$150</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>service3</td>
            <td>$250</td>
          </tr>
        </table>
        <hr />

        <h2>Total cost</h2>
      </div>
    </div>
  );
}

export default Repair;
