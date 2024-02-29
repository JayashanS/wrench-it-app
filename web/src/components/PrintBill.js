// PrintBill component

import React,{useState} from "react";
import { Card } from "react-bootstrap";
import "../styles/PrintBill.css";

function PrintBill({ partsData, invoiceDate, selectedServices, serviceCost,selectedRepairId ,selectedLicensePlateNo,selectedModel }) {
  const totalPartCost = partsData.reduce((acc, part) => acc + part.totalPrice, 0);
  const totalCost = totalPartCost + serviceCost;
  const [isOpen, setIsOpen] = useState(true);

  const handleclose=()=>{
    setIsOpen(false);
  }
  const handleprintBill=()=>{
    window.print();
  }
  // Render the invoice only if it's open
  if (!isOpen) {
    return null;
  }

    return (
    <div className="Add-new-bill-Table">
      <Card className="Add-New-bill-card-Table">
        <Card.Body>
          <div class="invoice-header">
            <h1>Invoice</h1>
          </div>
          <div class="invoice-details">
            <p>
              <strong>Invoice Number:</strong> #INV123
            </p>
            <p>
              <strong>Repair ID:</strong>{selectedRepairId}
            </p>
            <p>
              <strong>Model:</strong>{selectedModel}
            </p>
            <p>
              <strong>license Plate No:</strong>{selectedLicensePlateNo}
            </p>
            <p>
              <strong>Date:</strong>{invoiceDate}
            </p>
         
          </div>
          <table class="invoice-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Item</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {partsData.map((part, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{part.partName}</td>
                  <td>{part.quantity}</td>
                  <td>{part.unitPrice}</td>
                  <td>{part.totalPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="service-details">
           Service Cost
          
            <ul>
              {selectedServices.map((service, index) => (
                <li key={index}>{service}   -   {serviceCost}</li>
              ))}
            </ul>
            
          </div>
          <div className="total-cost">
              <div className="total-cost-item">
                   <h2>Total Part Cost</h2>
                    <p>{totalPartCost}</p>
              </div>
           <div className="total-cost-item">
                    <h2>Service Cost</h2>
                     <p>{serviceCost}</p>
           </div>
          <div className="total-cost-item">
                    <h2>Total Cost</h2>
                     <p>{totalCost}</p>
           </div>
          </div>
          <div className="button-container">
                        <button onClick={handleprintBill}>Submit</button>
                        <button onClick={handleclose}>Close</button>
                      </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PrintBill;
