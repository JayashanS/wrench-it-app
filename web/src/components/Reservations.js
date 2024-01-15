import React from "react";
import "../styles/Reservation.css";

const Reservations = () => {
  return (
    <div class="container-reservation">
    

  <div class="column-1">
      <p ><span class="container-title">Request</span></p>
      <hr/>
      <div class="column-3">
        <div class="innerColumn-1">
          <p class="circle-kawishka"></p>
          <p><center><span class="container-title">john Smith</span></center></p>
        </div>
        <div class="innerColumn-1">
        <table class="ReservationServices">
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td> service1</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td> service2</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td> service3</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td> service4</td>
          </tr>
        </table>



        </div>
        <div class="innerColumn-1">

          <p><span class="container-title">Date</span></p>
          <p>10/11/2023</p>
          <button class="button button1">Accept</button>
  
        </div>
        <div class="innerColumn-1">
          <p><span class="container-title">Time</span></p>
          <p>10.00 AM</p>
          <button class="button button2">Decline</button>
        </div>

          
      </div>

      <div class="column-3">
        <div class="innerColumn-1">
          
        </div>
        <div class="innerColumn-1">
          
        </div>
        <div class="innerColumn-1">
          
        </div>
        <div class="innerColumn-1">
         
        </div>
          
      </div>
      <div class="column-3">
        <div class="innerColumn-1">
          
        </div>
        <div class="innerColumn-1">
          
        </div>
        <div class="innerColumn-1">
          
        </div>
        <div class="innerColumn-1">
          
        </div>
         
      </div>

  </div>

  <div class="column-2">
      <p ><span class="container-title">Accepted</span></p>
      <hr/>

      <div class="column-4">

        <div class="innerRow-1">
        
         <div class="item-1"> Alice Smith</div>
         <div class="item-1"> Toyota Chammy</div>
         <div class="item-1">10/11/2023</div>
         <div class="item-1"> 16.00 pm</div>
         <div class="item-1"> icon</div>
         <div class="item-1"> icon</div>
         
        </div>
        <div class="innerRow-2">
         

          <div class="item-2"> <input type="checkbox" /> service1</div>
          <div class="item-2"> <input type="checkbox" /> service1</div>
          <div class="item-2"> <input type="checkbox" /> service1</div>
          <div class="item-2"> <input type="checkbox" /> service1</div>

        </div>
      </div>

      <div class="column-4">

     
      </div>
      <div class="column-4">

          
      </div>
      <div class="column-4">

         
      </div>
      <div class="column-4">

          
      </div>

  </div>

</div>);
};

export default Reservations;
