import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import mapboxgl from "mapbox-gl";
import "../styles/Location.css";

mapboxgl.accessToken = `${process.env.REACT_APP_API_TOKEN}`;

const Map = () => {
  const mapContainerRef = useRef(null);
  const [loading, setLoading] = React.useState(false);
  const [clickedLongitude, setClickedLongitude] = useState(null);
  const [clickedLatitude, setClickedLatitude] = useState(null);

  const [garageId, setGarageId] = useState(localStorage.getItem("garageId"));

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/garage/${garageId}`
      );
      const responseData = response.data;

      if (responseData.location) {
        setClickedLongitude(responseData.location.coordinates[0]);
        setClickedLatitude(responseData.location.coordinates[1]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const updateServices = async () => {
    try {
      const updatedData = {
        location: {
          type: "Point",
          coordinates: [clickedLongitude, clickedLatitude],
        },
      };

      const response = await axios.put(
        `http://localhost:4000/api/garage/location/${garageId}`,
        updatedData
      );

      console.log("Update successful:", response.data);
    } catch (error) {
      console.error("Error updating location:", error);
    }
  };
  // Initialize map when component mounts
  useEffect(() => {
    fetchData();
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [80.540379, 5.949636], // Default center coordinates
      zoom: 10,
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.on("click", (e) => {
      // Handle click event
      const coordinates = e.lngLat;
      console.log("Clicked on coordinates:", coordinates);

      // Set the clicked coordinates in the state
      setClickedLongitude(coordinates.lng);
      setClickedLatitude(coordinates.lat);

      // Remove existing pin if any
      const existingMarker = document.getElementById("marker");
      if (existingMarker) {
        existingMarker.remove();
      }

      // Add a pin to the clicked point
      const marker = new mapboxgl.Marker({ color: "#FF0000" })
        .setLngLat(coordinates)
        .addTo(map)
        .getElement();
      marker.id = "marker"; // Set an ID for the marker element
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSave = () => {
    setLoading(true);
    // Perform save operation if needed
  };

  return (
    <div className="location-container">
      <div className="map-inner-left">
        <span className="location-title">Sharing Your Location</span>
        <p>
          Your location is key to ensuring a smooth experience at our repair
          center. By sharing your location, you're helping us guide you quickly
          to our premises, making it easier for you and others to find us on
          maps. This ensures minimal delays and optimal service planning,
          ensuring a hassle-free experience. Your convenience matters—sharing
          your location helps us serve you better. Thank you for choosing
          us—we're committed to providing top-notch service!
        </p>
        <br />
        <p style={{ color: "#09BEB1", fontWeight: "bold" }}>
          Position your location and click where your repair center located.
          Once set, click the 'Save' button below for confirmation.{" "}
        </p>
        <br />
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            sx={{ color: "white", width: "270px" }}
            onClick={updateServices}
            disabled={loading}
          >
            Save
          </Button>
        </Stack>
      </div>
      <div className="sidebarStyle">
        <div>
          Current Saved Coordinates:{" "}
          {clickedLongitude !== null && clickedLatitude !== null
            ? `Longitude: ${clickedLongitude.toFixed(
                4
              )} | Latitude: ${clickedLatitude.toFixed(4)}`
            : "No coordinates clicked yet"}
        </div>
      </div>
      <div className="map-container" ref={mapContainerRef} />
    </div>
  );
};

export default Map;
