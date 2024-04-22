import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "../styles/Directions.css";
import "mapbox-gl/dist/mapbox-gl.css";

const MapWithDirections = ({ startLocation, endLocation }) => {
  const mapContainerRef = useRef(null);
  const instructionsContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = `${process.env.REACT_APP_API_TOKEN}`;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: startLocation.coordinates,
      zoom: 12,
    });

    const map = mapRef.current;

    map.on("load", () => {
      // Add starting point to the map
      map.addLayer({
        id: "start",
        type: "circle",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: startLocation.coordinates,
                },
              },
            ],
          },
        },
        paint: {
          "circle-radius": 10,
          "circle-color": "#3887be",
        },
      });

      // Add end point to the map
      map.addLayer({
        id: "end",
        type: "circle",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: endLocation.coordinates,
                },
              },
            ],
          },
        },
        paint: {
          "circle-radius": 10,
          "circle-color": "#f30",
        },
      });

      getRoute(startLocation.coordinates, endLocation.coordinates);
    });

    map.on("click", (event) => {
      const coords = Object.keys(event.lngLat).map((key) => event.lngLat[key]);
      getRoute(startLocation.coordinates, coords);
    });

    async function getRoute(start, end) {
      // Fetch route information
      const query = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
        { method: "GET" }
      );
      const json = await query.json();
      const data = json.routes[0];
      const route = data.geometry.coordinates;

      // Add or update the route on the map
      const geojson = {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: route,
        },
      };

      if (map.getSource("route")) {
        map.getSource("route").setData(geojson);
      } else {
        map.addLayer({
          id: "route",
          type: "line",
          source: {
            type: "geojson",
            data: geojson,
          },
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#3887be",
            "line-width": 5,
            "line-opacity": 0.75,
          },
        });
      }

      // Update instructions in React component
      const steps = data.legs[0].steps;
      let tripInstructions =
        "<p><strong>Trip duration: " +
        Math.floor(data.duration / 60) +
        " min 🚴 </strong></p><ol>";

      for (const step of steps) {
        tripInstructions += `<li>${step.maneuver.instruction}</li>`;
      }

      tripInstructions += "</ol>";

      instructionsContainerRef.current.innerHTML = tripInstructions;
    }

    return () => map.remove(); // Cleanup map on component unmount
  }, [startLocation, endLocation]);

  return (
    <div style={{ display: "flex" }} className="directions-container">
      <div ref={mapContainerRef} style={{ flex: 1, height: "400px" }} />
      <div
        id="instructions"
        ref={instructionsContainerRef}
        style={{
          width: "25%",
          padding: "20px",
          backgroundColor: "#fff",
          overflowY: "scroll",
          fontFamily: "sans-serif",
          fontSize: "12px",
          height: "400px",
        }}
      ></div>
    </div>
  );
};

export default MapWithDirections;
