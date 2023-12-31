import React, { useState, useEffect, useRef } from "react";
import "../styles/GarageDetails.css";

const GarageDetails = () => {
  // label state handeling code

  const [repairCenterName, setRepairCenterName] = useState("");
  const [repairCenterNameFocus, setRepairCenterNameFocus] = useState(false);

  const [ownerName, setOwnerName] = useState("");
  const [ownerNameFocus, setOwnerNameFocus] = useState(false);

  const [ownerNIC, setOwnerNIC] = useState("");
  const [ownerNICFocus, setOwnerNICFocus] = useState(false);

  const [address_1, setAddress_1] = useState("");
  const [address_1Focus, setAddress_1Focus] = useState(false);

  const [address_2, setAddress_2] = useState("");
  const [address_2Focus, setAddress_2Focus] = useState(false);

  const [address_3, setAddress_3] = useState("");
  const [address_3Focus, setAddress_3Focus] = useState(false);

  const [address_4, setAddress_4] = useState("");
  const [address_4Focus, setAddress_4Focus] = useState(false);

  const [numOfWorkers, setNumOfWorkers] = useState("");
  const [numOfWorkersFocus, setNumOfWorkersFocus] = useState(false);

  const handleRepairCenterNameChange = (e) => {
    setRepairCenterName(e.target.value);
  };

  const handleOwnerNameChange = (e) => {
    setOwnerName(e.target.value);
  };

  const handleOwnerNICChange = (e) => {
    setOwnerNIC(e.target.value);
  };

  const handleAddress_1Change = (e) => {
    setAddress_1(e.target.value);
  };

  const handleAddress_2Change = (e) => {
    setAddress_2(e.target.value);
  };

  const handleAddress_3Change = (e) => {
    setAddress_3(e.target.value);
  };

  const handleAddress_4Change = (e) => {
    setAddress_4(e.target.value);
  };

  const handleNumOfWorkersChange = (e) => {
    setNumOfWorkers(e.target.value);
  };

  return (
    <div className="container">
      <div className="container-left">
        <div className="box-1">
          <h5>Service Center Details</h5>
          <br />
          <form>
            <div className="user-box">
              <input
                type="text"
                name="repairCenterName"
                placeholder=""
                defaultValue={repairCenterName}
                required
                onChange={handleRepairCenterNameChange}
                onMouseEnter={() => setRepairCenterNameFocus(true)}
                onMouseLeave={() => setRepairCenterNameFocus(false)}
              />
              <label
                className={`username-label ${address_1Focus ? "focused" : ""}`}
              >
                Repair Center Name
              </label>
            </div>

            <div className="user-box">
              <input
                type="text"
                name="ownerName"
                placeholder=""
                defaultValue={ownerName}
                required
                onChange={handleOwnerNameChange}
                onMouseEnter={() => setOwnerNameFocus(true)}
                onMouseLeave={() => setOwnerNameFocus(false)}
              />
              <label
                className={`username-label ${ownerNameFocus ? "focused" : ""}`}
              >
                Owner Name
              </label>
            </div>
            <div className="user-box">
              <input
                type="text"
                name="ownerNIC"
                placeholder=""
                defaultValue={ownerNIC}
                required
                onChange={handleOwnerNICChange}
                onMouseEnter={() => setOwnerNICFocus(true)}
                onMouseLeave={() => setOwnerNICFocus(false)}
              />
              <label
                className={`username-label ${ownerNICFocus ? "focused" : ""}`}
              >
                Owner NIC
              </label>
            </div>
            <div className="user-box">
              <input
                type="number"
                name="numOfWorkers"
                placeholder=""
                defaultValue={numOfWorkers}
                required
                onChange={handleNumOfWorkersChange}
                onMouseEnter={() => setNumOfWorkersFocus(true)}
                onMouseLeave={() => setNumOfWorkersFocus(false)}
              />
              <label
                className={`username-label ${
                  numOfWorkersFocus ? "focused" : ""
                }`}
              >
                Number Of Workers
              </label>
            </div>
            <br />
            <h5>Address</h5>
            <br />
            <div className="user-box">
              <input
                type="text"
                name="address_1"
                placeholder=""
                defaultValue={address_1}
                required
                onChange={handleAddress_1Change}
                onMouseEnter={() => setAddress_1Focus(true)}
                onMouseLeave={() => setAddress_1Focus(false)}
              />
              <label
                className={`username-label ${address_1Focus ? "focused" : ""}`}
              >
                Street Address
              </label>
            </div>
            <div className="user-box">
              <input
                type="text"
                name="address_2"
                placeholder=""
                defaultValue={address_2}
                required
                onChange={handleAddress_2Change}
                onMouseEnter={() => setAddress_2Focus(true)}
                onMouseLeave={() => setAddress_2Focus(false)}
              />
              <label
                className={`username-label ${address_2Focus ? "focused" : ""}`}
              >
                City or Locality
              </label>
            </div>
            <div className="user-box">
              <input
                type="text"
                name="address_3"
                placeholder=""
                defaultValue={address_3}
                required
                onChange={handleAddress_3Change}
                onMouseEnter={() => setAddress_3Focus(true)}
                onMouseLeave={() => setAddress_3Focus(false)}
              />
              <label
                className={`username-label ${address_3Focus ? "focused" : ""}`}
              >
                State
              </label>
            </div>
            <div className="user-box">
              <input
                type="number"
                name="address_4"
                placeholder=""
                defaultValue={address_4}
                required
                onChange={handleAddress_4Change}
                onMouseEnter={() => setAddress_4Focus(true)}
                onMouseLeave={() => setAddress_4Focus(false)}
              />
              <label
                className={`username-label ${address_4Focus ? "focused" : ""}`}
              >
                Postal Code
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="container-middle">
        <div className="box-1">
          <h5>Services Offered</h5>
          <form>
            <div class="check-box">
              <input
                type="checkbox"
                id="towing"
                name="service"
                value="Towing"
              />
              <label class="check-label" for="towing">
                Towing Services
              </label>
            </div>

            <div class="check-box">
              <input
                type="checkbox"
                id="battery"
                name="service"
                value="Battery"
              />
              <label class="check-label" for="battery">
                Battery Services
              </label>
            </div>

            <div class="check-box">
              <input
                type="checkbox"
                id="flat_tire"
                name="service"
                value="Flat Tire"
              />
              <label class="check-label" for="flat_tire">
                Flat Tire Repair/Replacement
              </label>
            </div>

            <div class="check-box">
              <input type="checkbox" id="brake" name="service" value="Brake" />
              <label class="check-label" for="brake">
                Brake Services
              </label>
            </div>

            <div class="check-box">
              <input
                type="checkbox"
                id="engine_transmission"
                name="service"
                value="Engine/Transmission"
              />
              <label class="check-label" for="engine_transmission">
                Engine or Transmission Issues
              </label>
            </div>

            <div class="check-box">
              <input
                type="checkbox"
                id="fluid_leaks"
                name="service"
                value="Fluid Leaks"
              />
              <label class="check-label" for="fluid_leaks">
                Fluid Leaks or Overheating
              </label>
            </div>

            <div class="check-box">
              <input
                type="checkbox"
                id="electrical"
                name="service"
                value="Electrical"
              />
              <label class="check-label" for="electrical">
                Electrical System Issues
              </label>
            </div>

            <div class="check-box">
              <input
                type="checkbox"
                id="steering_suspension"
                name="service"
                value="Steering/Suspension"
              />
              <label class="check-label" for="steering_suspension">
                Steering or Suspension Problems
              </label>
            </div>
            <br />
            <br />
            <h5>Vehicle Categories</h5>

            <div class="check-box">
              <input
                type="checkbox"
                id="passengerCars"
                name="category"
                value="Passenger Cars"
              />
              <label class="check-label" for="passengerCars">
                Passenger Cars
              </label>
            </div>

            <div class="check-box">
              <input type="checkbox" id="suvs" name="category" value="SUVs" />
              <label class="check-label" for="suvs">
                SUVs (Sport Utility Vehicles)
              </label>
            </div>

            <div class="check-box">
              <input
                type="checkbox"
                id="trucks"
                name="category"
                value="Trucks"
              />
              <label class="check-label" for="trucks">
                Trucks
              </label>
            </div>

            <div class="check-box">
              <input type="checkbox" id="vans" name="category" value="Vans" />
              <label class="check-label" for="vans">
                Vans
              </label>
            </div>

            <div class="check-box">
              <input
                type="checkbox"
                id="motorcycles"
                name="category"
                value="Motorcycles"
              />
              <label class="check-label" for="motorcycles">
                Motorcycles
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="container-right">
        <form>
          <div className="box-2">
            <h5>Opening Hours</h5>
            <form>
              <div className="user-box">
                From:
                <input type="time" name="from" />
              </div>
              <div className="user-box">
                To:
                <input type="time" name="to" />
              </div>
              <h5>Opening Days</h5>
              <div
                class="btn-group-vertical check-group"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                <input
                  type="checkbox"
                  class="btn-check"
                  id="btncheck1"
                  autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="btncheck1">
                  SUN
                </label>

                <input
                  type="checkbox"
                  class="btn-check"
                  id="btncheck2"
                  autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="btncheck2">
                  MON
                </label>

                <input
                  type="checkbox"
                  class="btn-check"
                  id="btncheck3"
                  autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="btncheck3">
                  TUE
                </label>
                <input
                  type="checkbox"
                  class="btn-check"
                  id="btncheck4"
                  autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="btncheck4">
                  WED
                </label>
                <input
                  type="checkbox"
                  class="btn-check"
                  id="btncheck5"
                  autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="btncheck5">
                  THU
                </label>
                <input
                  type="checkbox"
                  class="btn-check"
                  id="btncheck6"
                  autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="btncheck6">
                  FRI
                </label>
                <input
                  type="checkbox"
                  class="btn-check"
                  id="btncheck7"
                  autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="btncheck7">
                  SAT
                </label>
              </div>
            </form>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GarageDetails;
