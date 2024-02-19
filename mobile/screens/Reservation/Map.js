import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";
import { TOKEN } from "@env";

MapboxGL.setAccessToken(TOKEN);

const MapComponent = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    // Request permission to access the device's location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation([longitude, latitude]);
      },
      (error) => setErrorMessage(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  return (
    <View style={styles.container}>
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <MapboxGL.MapView style={styles.map}>
          {currentLocation && (
            <>
              <MapboxGL.Camera
                zoomLevel={15}
                centerCoordinate={currentLocation}
              />
              <MapboxGL.PointAnnotation
                id="currentLocation"
                coordinate={currentLocation}
              />
            </>
          )}
        </MapboxGL.MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapComponent;
