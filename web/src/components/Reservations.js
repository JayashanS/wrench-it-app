import React from "react";
import "../styles/Reservation.css";

const Reservations = () => {
  return (
    <div class="container-reservation">
    

        <div class="column-1">
          <p>
            <span class="container-title">Request</span>
          </p>
          <div class="column-3">
            <div class="innerColumn-1">
              <div class="circle-kawishka"></div>
              <p>
                <center>
                  <span class="container-title">john Smith</span>
                </center>
              </p>
            </div>
            <div class="innerColumn-1">
              <input
                type="checkbox"
                id="service1"
                name="service1"
                value="service 1"
              />
              <label for="service1"> Service 1</label>
              <input
                type="checkbox"
                id="service1"
                name="service1"
                value="service 1"
              />
              <label for="service1"> Service 1</label>
              <input
                type="checkbox"
                id="service1"
                name="service1"
                value="service 1"
              />
              <label for="service1"> Service 1</label>
            </div>
            <div class="innerColumn-1">
              <p>
                <span class="container-title">Date</span>
              </p>
            </div>
            <div class="innerColumn-1">
              <p>
                <span class="container-title">Time</span>
              </p>
            </div>
          </div>

          <div class="column-3">
            <div class="innerColumn-1"></div>
            <div class="innerColumn-1"></div>
            <div class="innerColumn-1"></div>
            <div class="innerColumn-1"></div>
          </div>
          <div class="column-3">
            <div class="innerColumn-1"></div>
            <div class="innerColumn-1"></div>
            <div class="innerColumn-1"></div>
            <div class="innerColumn-1"></div>
          </div>
        </div>

        <div class="column-2">
          <p>
            <span class="container-title">Accepted</span>
          </p>
          <div class="column-4">dddd</div>

          <div class="column-2">
            <p>
              <span class="container-title">Accepted</span>
            </p>
            <div class="column-4">ddddd</div>

            <div class="column-4">ddddd</div>
            <div class="column-4">ddddd</div>
            <div class="column-4">ddddd</div>
            <div class="column-4">ddddd</div>
          </div>
        </div>
      </div>
      <div class="column-4">

          ddddd
      </div>
      <div class="column-4">

          ddddd
      </div>
      <div class="column-4">

          ddddd
      </div>

  </div>

</div>);
};

export default Reservations;
