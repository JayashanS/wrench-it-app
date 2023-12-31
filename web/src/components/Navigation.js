import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

const MapComponent = () => {
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [coordinates, setCoordinates] = useState([80.540379, 5.949636]); // Default coordinates

  useEffect(() => {
    mapboxgl.accessToken = `${process.env.REACT_APP_MAPBOX_TOKEN}`;

    const initializedMap = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: coordinates,
      zoom: 13,
    });

    initializedMap.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      })
    );

    setMap(initializedMap);

    const markerElement = document.createElement("div");
    markerElement.className = "marker";

    const newMarker = new mapboxgl.Marker(markerElement)
      .setLngLat(coordinates)
      .addTo(initializedMap);

    setMarker(newMarker);

    return () => {
      initializedMap.remove();
    };
  }, []);

  const moveMarker = (lngChange, latChange) => {
    const newLng = coordinates[0] + lngChange;
    const newLat = coordinates[1] + latChange;

    if (map && marker) {
      marker.setLngLat([newLng, newLat]);
      setCoordinates([newLng, newLat]);
    }
  };

  return (
    <div
      id="map"
      style={{ position: "absolute", top: 0, bottom: 0, width: "100%" }}
    >
      {/* Buttons to move the marker */}
      <div>
        <button onClick={() => moveMarker(0.01, 0)}>Move Right</button>
        <button onClick={() => moveMarker(-0.01, 0)}>Move Left</button>
        <button onClick={() => moveMarker(0, 0.01)}>Move Up</button>
        <button onClick={() => moveMarker(0, -0.01)}>Move Down</button>
      </div>
    </div>
  );
};

export default MapComponent;
