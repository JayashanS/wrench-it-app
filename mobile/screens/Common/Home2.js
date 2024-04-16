import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";

import Font from "../../constants/Fonts";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";

const windowWidth = Dimensions.get("window").width;

const Home_2 = () => {
  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState(null);
  const [address, setAddress] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const mapViewRef = useRef(null);

  const navigation = useNavigation();

  const goToFullScreenMap = () => {
    navigation.navigate("Map");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      });

      let addressResponse = await Location.reverseGeocodeAsync({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });

      if (addressResponse.length > 0) {
        setAddress(addressResponse[0]);
      }
    })();
  }, []);

  const handleZoomIn = () => {
    mapViewRef.current.animateToRegion({
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta / 2,
      longitudeDelta: region.longitudeDelta / 2,
    });
  };

  const handleZoomOut = () => {
    mapViewRef.current.animateToRegion({
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta * 2,
      longitudeDelta: region.longitudeDelta * 2,
    });
  };

  if (!location || !region || !address) {
    return <View style={styles.container} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          ref={mapViewRef}
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
        <View style={styles.bottomContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.addressText}>
              You are at: {address.street}, {address.city}, {address.country}
            </Text>
            <Text style={styles.dateTime}>
              Current Time: {currentTime.toLocaleTimeString()},{" "}
              {currentTime.toLocaleDateString()}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleZoomIn} style={styles.button}>
              <MaterialIcons name="zoom-in" size={24} color="#125C75" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleZoomOut} style={styles.button}>
              <MaterialIcons name="zoom-out" size={24} color="#125C75" />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={goToFullScreenMap}
          style={styles.fullScreenButton}
        >
          <Text style={styles.fullScreenButtonText}>View Map</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Request")}
          >
            <View style={styles.cardContent}>
              <MaterialIcons name="search" size={40} color="#125C75" />
              <View style={styles.textContent}>
                <Text style={styles.cardTitle}>Find Garages</Text>
                <Text style={styles.cardDescription}>Near by Repair</Text>
                <Text style={styles.cardDescription}>Centers</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Reservations")}
          >
            <View style={styles.cardContent}>
              <MaterialIcons name="event" size={40} color="#125C75" />
              <View style={styles.textContent}>
                <Text style={styles.cardTitle}>Reservations</Text>
                <Text style={styles.cardDescription}>Manage Your</Text>
                <Text style={styles.cardDescription}>Reservations</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.card, styles.bottomCard]}
            onPress={() => navigation.navigate("Profile")}
          >
            <View style={styles.cardContent}>
              <MaterialIcons name="person" size={40} color="#125C75" />
              <View style={styles.textContent}>
                <Text style={styles.cardTitle}>Profile</Text>
                <Text style={styles.cardDescription}>View and Edit</Text>
                <Text style={styles.cardDescription}>Profile Details</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.card, styles.bottomCard]}
            onPress={() => navigation.navigate("RepairHistory")}
          >
            <View style={styles.cardContent}>
              <MaterialIcons name="history" size={40} color="#125C75" />
              <View style={styles.textContent}>
                <Text style={styles.cardTitle}>Repair History</Text>
                <Text style={styles.cardDescription}>View Repair Records</Text>
                <Text style={styles.cardDescription}>and Billing</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  map: {
    flex: 0.9,
    borderRadius: 30,
  },
  mapContainer: {
    flex: 0.6,
    borderRadius: 10,
    backgroundColor: "#fff",
    overflow: "hidden",
    elevation: 3,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    marginBottom: 2,
  },
  textContainer: {
    flex: 1,
  },
  addressText: {
    fontSize: FontSize.large,
    fontFamily: Font.bold,
    color: Colors.black,
    marginBottom: 5,
  },
  dateTime: {
    fontSize: FontSize.medium,
    fontFamily: Font.regular,
    color: Colors.light,
  },
  fullScreenButton: {
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingVertical: 0,
    marginTop: 10,
    marginLeft: 10,
  },
  fullScreenButtonText: {
    color: "#125C75",
    fontSize: FontSize.large,
    fontFamily: Font.regular,
  },
  cardContainer: {
    flex: 0.4,
    marginTop: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    flex: 0.49,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 25,
    paddingTop: 25,
    paddingBottom: 25,
    elevation: 3,
  },
  bottomCard: {
    marginTop: 5,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContent: {
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: FontSize.large,
    fontFamily: Font.bold,
    color: Colors.black,
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: FontSize.small,
    fontFamily: Font.regular,
    color: Colors.light,
    marginTop: 0,
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
];
export default Home_2;
