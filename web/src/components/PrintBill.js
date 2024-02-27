// PrintBill component

import React from "react";
import { Card } from "react-bootstrap";
import "../styles/PrintBill.css";

function PrintBill({ partsData, invoiceDate, selectedServices, serviceCost  }) {
    const totalCost = partsData.reduce((acc, part) => acc + part.totalPrice, 0) + serviceCost;


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
            <h2>Service Cost</h2>
          
            <ul>
              {selectedServices.map((service, index) => (
                <li key={index}>{service}   -   {serviceCost}</li>
              ))}
            </ul>
            
          </div>
          <div className="total-cost">
            <h2>Total Cost</h2>
            <p>{totalCost}</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PrintBill;
