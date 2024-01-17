import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "../styles/Repair.css";
import {
  createTheme,
  ThemeProvider,
  getContrastRatio,
} from "@mui/material/styles";

function Repair() {
	const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isPartsFormOpen, setIsPartsFormOpen] = useState(false);
  

	const toggleAccordion = () => {
	  setIsAccordionOpen(!isAccordionOpen);
	};
  const togglePartsForm = () => {
    setIsPartsFormOpen(!isPartsFormOpen);
  };

  const theme = createTheme({
    typography: {
      fontFamily: "Roboto, sans-serif",
    },
    palette: {
      primary: {
        main: "#09BEB1",
        contrastText: getContrastRatio("#09BEB1", "#fff") > 4.5 ? "#fff" : "#111",
      },
    },
  });

  
    const[repairId,setRepairId]=useState('')
    const[licensePlateNo,setlicensePlateNo]=useState('')
    const[model,setmodel]=useState('')
    const[fault,setfault]=useState('')
    const[NIC,setNIC]=useState('')
    const[date,setdate]=useState('')
    const[phoneNo,setphoneNo]=useState('')
    const[status,setstatus]=useState('')
    const[error,setError]=useState(null)

   const handleSubmit=async(e)=>{
    console.log('button clicked')
      e.preventDefault()
      const  repair={repairId,licensePlateNo,model,fault,NIC,date,phoneNo,status}
     
      const response=await fetch('/api/repair',{
        method:'POST',
        body:JSON.stringify(repair),
        headers:{
          'Content-Type':'application/json'
        }
      })
      console.log('button clicked')

      const json=await response.json()

      if(!response.ok){
          setError(json.error)
      }
      if(response.ok){
        setRepairId('')
        setlicensePlateNo('')
        setmodel('')
        setfault('')
        setNIC('')
        setdate('')
        setphoneNo('')
        setstatus('')
        setError(null)
        console.log('new workout added',json)
      }
   }
 


 
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
        <ThemeProvider theme={theme}>
        <Stack spacing={2} direction="row">
    
      <Button variant="contained" onClick={toggleAccordion} style={{ color: 'white',textTransform:'none' }}>Add new Repair Record  </Button>

    </Stack>
    </ThemeProvider>

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
    			<input type="text" id="repairId" name="repairId" onChange={(e)=>setRepairId(e.target.value)} value={repairId} required/>

				<label for="licensePlateNo">License Plate No:</label>
   	 			<input type="text" id="licensePlateNo" name="licensePlateNo" onChange={(e)=>setlicensePlateNo(e.target.value)} value={licensePlateNo} required></input>
				
				<label for="model">Model:</label>
    			<input type="text" id="model" name="model" onChange={(e)=>setmodel(e.target.value)} value={model} required/>

				<label for="fault">Fault:</label>
    			<textarea id="fault" name="fault" rows="4" onChange={(e)=>setfault(e.target.value)} value={fault} required></textarea>
				
				<label for="NIC">NIC:</label>
    			<input type="text" id="NIC" name="NIC" onChange={(e)=>setNIC(e.target.value)} value={NIC} required />

   				 <label for="phoneNo">Phone No:</label>
    			<input type="tel" id="phoneNo" name="phoneNo" onChange={(e)=>setphoneNo(e.target.value)} value={phoneNo} required />

    			<label for="date">Date:</label>
    			<input type="date" id="date" name="date" onChange={(e)=>setdate(e.target.value)} value={date} required />

    			<label for="status">Status:</label>
				<select id="status" name="status" onChange={(e)=>setstatus(e.target.value)} value={status} required>
      				<option value="Pending">Pending</option>
      				<option value="In Progress">In Progress</option>
      				<option value="Completed">Completed</option>
            
    			</select>
				
				<button type="button" onClick={handleSubmit}>Submit</button>
				{error && <div className="error">error</div>}
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
              
            <ThemeProvider theme={theme}>
        <Stack spacing={2} direction="row">
    
      <Button variant="contained" onClick={togglePartsForm} style={{ color: 'white',textTransform:'none' }}>Add new Repair Record  </Button>

    </Stack>
    </ThemeProvider>
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
                </table>
     <br />
     

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
