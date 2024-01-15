import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import "../styles/Repair.css";

function Repair() {
	const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isPartsFormOpen, setIsPartsFormOpen] = useState(false);
	const toggleAccordion = () => {
	  setIsAccordionOpen(!isAccordionOpen);
	};
  const togglePartsForm = () => {
    setIsPartsFormOpen(!isPartsFormOpen);
  };

// form validation
/*const validateForm = () => {
    const form = document.getElementById("repairForm");
    const elements = form.elements;

    for (let i = 0; i < elements.length; i++) {
      if (elements[i].type !== "button" && elements[i].type !== "submit") {
        if (!elements[i].value.trim()) {
          alert("Please fill in all required fields.");
          return;
        }
      }
    }
    alert("Form submitted successfully!");
  };

*/

//const Repair = () => {
  return (
    <div class="RepairPage">
      <div class="RepairContainer1">
        <h2>Details</h2>
        <hr />
        <br />
        <button class="btn"  onClick={toggleAccordion}>Add new Repair Record</button>
        <br />
        <br />
		{isAccordionOpen && (

//Add new Repair form

        <div className="Add-new-Form">
          <Card className="Add-New-Form-card">
            <Card.Body>
			
		<h2>Repair Information Form</h2>
			<form id="repairForm">
				<label for="repairId">Repair ID:</label>
    			<input type="text" id="repairId" name="repairId" required/>

				<label for="licensePlateNo">License Plate No:</label>
   	 			<input type="text" id="licensePlateNo" name="licensePlateNo" required></input>
				
				<label for="model">Model:</label>
    			<input type="text" id="model" name="model" required/>

				<label for="fault">Fault:</label>
    			<textarea id="fault" name="fault" rows="4" required></textarea>
				
				<label for="NIC">NIC:</label>
    			<input type="text" id="NIC" name="NIC" required />

   				 <label for="phoneNo">Phone No:</label>
    			<input type="tel" id="phoneNo" name="phoneNo" required />

    			<label for="date">Date:</label>
    			<input type="date" id="date" name="date" required />

    			<label for="status">Status:</label>
				<select id="status" name="status" required>
      				<option value="Pending">Pending</option>
      				<option value="In Progress">In Progress</option>
      				<option value="Completed">Completed</option>
    			</select>
				
				<button type="button" onclick="validateForm()">Submit</button>
				
				</form>
				
              <Accordion defaultActiveKey="0">
                
                <br />
              </Accordion>
            </Card.Body>
          </Card>
        </div>
        
      )}
		
        <table class="Repair">
          <tr>
            <th>Repair ID</th>
            <th>Vehicle</th>
            <th>Model</th>
            <th>Fault</th>
            <th>Date</th>
            <th>Owner</th>
            <th>Contact</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>R789012</td>
            <td>XYZ789</td>
            <td>CarModel2</td>
            <td>Brake Problem</td>
            <td>2024-01-15 14:30:00</td>
            <td>987654321Y</td>
            <td>987-654-3210</td>
            <td>In Progress</td>
          </tr>
          <tr>
            <td>R345678</td>
            <td>DEF456</td>
            <td>CarModel3</td>
            <td>Transmission Issue</td>
            <td>2024-01-20 10:45:00</td>
            <td>456789012Z</td>
            <td>456-789-0123</td>
            <td>Completed</td>
          </tr>
          <tr>
            <td>R123456</td>
            <td>ABC123</td>
            <td>CarModel1</td>
            <td>Engine Issue</td>
            <td>2024-01-10 12:00:00</td>
            <td>123456789X</td>
            <td>123-456-7890</td>
            <td>Pending</td>
          </tr>
        </table>
        
      </div>
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
              <button class="btnParts" onClick={togglePartsForm} >Add Parts</button>
              {isPartsFormOpen && (

     //Add new parts form

        <div className="Add-new-parts-Form">
          <Card className="Add-New-parts-card">

          <Card.Body>
            <h2>Add Parts</h2>
            <form action="/submit" method="post">
                   <label for="part">Part:</label>
                   <input type="text" id="part" name="part" required></input>
            
                   <label for="quantity">Quantity:</label>
                   <input type="number" id="quantity" name="quantity" required></input>

                   <label for="price">Price per unit:</label>
                   <input type="number" id="price" name="price" required></input>

                  <label for="totalPrice">Total Price:</label>
                  <input type="number" id="totalPrice" name="totalPrice" readonly></input>

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

          <table class="parts">
            <tr>
              <th>part</th>
              <th>quantity</th>
              <th>price</th>
              <th>Total price</th>
            </tr>
            <tr>
              <td>Part 1</td>
              <td>5</td>
              <td>$10.00</td>
              <td>$50.00</td>
            </tr>

            <tr>
              <td>Part 2</td>
              <td>2</td>
              <td>$15.00</td>
              <td>$30.00</td>
            </tr>
          </table>
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
		};
	

export default Repair;
