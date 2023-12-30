import React, { useState, useEffect, useRef } from "react";

import mapboxgl from "mapbox-gl";
import axios from "axios";
import "../styles/GarageDetails.css";
import "mapbox-gl/dist/mapbox-gl.css";

const GarageDetails = () => {
  // label state handeling code

  const [repairCenterName, setRepairCenterName] = useState("");
  const [repairCenterNameFocus, setRepairCenterNameFocus] = useState(false);

  const [ownerName, setOwnerName] = useState("");
  const [ownerNameFocus, setOwnerNameFocus] = useState(false);

  const [ownerNIC, setOwnerNIC] = useState("");
  const [ownerNICFocus, setOwnerNICFocus] = useState(false);

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

  const handleNumOfWorkersChange = (e) => {
    setNumOfWorkers(e.target.value);
  };

  // map rendering code

  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({ longitude: 0, latitude: 0 });

  const handleAddressSubmit = async () => {
    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          address
        )}.json?access_token=pk.eyJ1IjoiaGltYW50aGExMTY4MSIsImEiOiJjbHFxaXZwbng0ZG50Mmp0azA3Z20zNDZvIn0.mAbxfN00rmOxhwVCBrsUUQ`
      );

      // Extract latitude and longitude from the API response
      const { features } = response.data;
      if (features && features.length > 0) {
        const [longitude, latitude] = features[0].center;
        setCoordinates({ longitude, latitude });
      }
    } catch (error) {
      console.error("Error fetching coordinates: ", error);
    }
  };

  return (
    <div className="container">
      <div className="container-left">
        <div className="box-1">
          <h5>Service Center Details</h5>
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
                className={`username-label ${
                  repairCenterNameFocus ? "focused" : ""
                }`}
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
                type="text"
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
          </form>
        </div>
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
          </form>
        </div>
      </div>
      <div className="container-middle">
        <div>
          <h5>Address & Location</h5>
          <form>
            <div>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter an address"
              />
              <button onClick={handleAddressSubmit}>Get Coordinates</button>
            </div>
            <div>
              <label>Longitude:</label>
              <input type="text" value={coordinates.longitude} readOnly />
            </div>
            <div>
              <label>Latitude:</label>
              <input type="text" value={coordinates.latitude} readOnly />
            </div>
            <div
              id="map"
              style={{ width: "90%", height: "500px", margin: "auto" }}
            />
            ;
          </form>
        </div>
      </div>
      <div className="container-right">
        <div className="box-3">
          <h5>Pricing</h5>
          <form>
            <div className="user-box">
              From:
              <input type="time" name="from" />
            </div>
            <div className="user-box">
              To:
              <input type="time" name="to" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GarageDetails;
