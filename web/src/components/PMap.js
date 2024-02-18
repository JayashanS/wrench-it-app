import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";

// Mapbox access token
mapboxgl.accessToken = `${process.env.REACT_APP_API_TOKEN}`;

const PMap = () => {
  const [longitude, setLongitude] = useState("80.4811");
  const [latitude, setLatitude] = useState("6.0101");

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [longitude, latitude],
      zoom: 10,
    });

    // Add marker
    new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);

    // Update state variables on map movement
    map.on("move", () => {
      const { lng, lat } = map.getCenter();
      setLongitude(lng);
      setLatitude(lat);
    });

    return () => map.remove();
  }, [longitude, latitude]);

  return (
    <div id="map-container" style={{ width: "200px", height: "200px" }}></div>
  );
};

export default PMap;
