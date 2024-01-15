import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "../styles/Location.css";

mapboxgl.accessToken = `${process.env.REACT_APP_API_TOKEN}`;

const Map = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(80.540379);
  const [lat, setLat] = useState(5.949636);
  const [zoom, setZoom] = useState(10);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
          Position your location under the red circle at the center and adjust
          the zoom level between 17 to 19 (Recomended) using the scroll button.
          Once set, click the 'Save' button below for confirmation.{" "}
        </p>
        <br />
        <input type="submit" className="location-save" value="Save" />
      </div>
      <div className="sidebarStyle">
        <div>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
      <div className="map-container" ref={mapContainerRef} />
      <div class="overlay-layer">
        <div class="circle"></div>
      </div>
    </div>
  );
};

export default Map;
