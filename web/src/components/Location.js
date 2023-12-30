import React, { useState } from "react";
import mapboxgl from "mapbox-gl";
import axios from "axios"; // Import axios

import "mapbox-gl/dist/mapbox-gl.css";

const Pricing = () => {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({ longitude: 0, latitude: 0 });

  const handleAddressSubmit = async () => {
    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          address
        )}.json?access_token=pk.eyJ1IjoiaGltYW50aGExMTY4MSIsImEiOiJjbHFzOTNpOW8xcm9pMnFzYjlkZDM2NjNuIn0.dfqTn4zFadOj8Vzw-JwpYg`
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

  // ... your map rendering code

  return (
    <div>
      {/* Your map div and other map-related code */}
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
    </div>
  );
};

export default Pricing;
