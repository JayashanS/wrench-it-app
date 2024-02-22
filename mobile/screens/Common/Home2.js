import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";

import Font from "../../constants/Fonts";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";

const YourComponent = () => {
  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Location permission not granted");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
      });

      setLocation(currentLocation.coords);

      setRegion({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    })();
  }, []);

  if (!location || !region) {
    return <View style={styles.container} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={region}
          customMapStyle={mapStyle}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="My Location"
          />
        </MapView>
        <View style={styles.location}>
          <MaterialIcons name="location-on" size={24} color="white" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 0.7,
    borderRadius: 30,
  },
  mapContainer: {
    flex: 0.5,
    margin: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    overflow: "hidden",
    elevation: 3,
  },
  location: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStyle = [
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#193341",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      {
        color: "#2c5a71",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#29768a",
      },
    ],
  },
  // Add more custom styles as needed
];
export default YourComponent;
