import React from "react";
import "../styles/Repair.css"

const Repair = () => {
  return (<div class="RepairPage">
	<div class="Repaircontainer1">
		<h2>Details</h2>
		<hr />
		<br />
		<button class="btn">Add new Repair Record</button><br />
		<br />
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
		<td>Brake_Problem</td>
		<td>2024-01-15</td>
		<td>987654321Y</td>
		<td>0778787877</td>
		<td>In Progress</td>
	</tr>
	<tr>
		<td>R345678</td>
		<td>DEF456</td>
		<td>CarModel3</td>
		<td>Transmission Issue</td>
		<td>2024-01-20</td>
		<td>456789012Z</td>
		<td>077878787</td>
		<td>Completed</td>
	</tr>
	<tr>
    		<td>R123456</td>
   		<td>ABC123</td>
    		<td>CarModel1</td>
    		<td>Engine Issue</td>
    		<td>2024-01-10</td>
    		<td>123456789X</td>
    		<td>09989878755</td>
    		<td>Pending</td>
	</tr>
	</table>
	</div>
<div class="Repaircontainer2">
	<h2>Billing</h2>
	<hr /><br />
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
			<td>From analyzing symptoms to conducting specific tests, the diagnostic report outlines findings and proposes precise actions for resolution. It succinctly communicates the identified issue</td>
		</tr>	
		<tr>
			<td>Date</td>
			<td>09-01-2024</td>
		</tr>
		<tr>
			<td>Parts</td>
			<td><button class="btnParts">Add Parts</button></td>
		</tr>
	
	<table class="parts">
		<tr>
			<th>part</th>
			<th>quantity</th>
			<th>price</th>
			<th>Total price</th>
		</tr>
		<tr>
			<td>Part1</td>
			<td>5</td>
			<td>$10.00</td>
			<td>$50.00</td>
		</tr>

		<tr>
			<td>Part2</td>
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
			<td><input type="checkbox" /></td>
			<td>service1</td>
			<td>$50</td>
		</tr>
		<tr>
			<td><input type="checkbox" /></td>
			<td>service2</td>
			<td>$150</td>
		</tr>
		<tr>
			<td><input type="checkbox" /></td>
			<td>service3</td>
			<td>$250</td>
		</tr>
	</table>
	<hr />
	
	<h2>Total cost</h2>
</div>
</div>);
};

export default Repair;
