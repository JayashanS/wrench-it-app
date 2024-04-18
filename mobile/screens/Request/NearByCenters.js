import React, { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import CenterCard from "./CenterCard";

const NearByCenters = () => {
  const navigation = useNavigation();
  const [garages, setGarages] = useState([]);

  const fetchData = async (longitude, latitude) => {
    try {
      const response = await fetch(
        `http://${process.env.EXPO_PUBLIC_IP}:4000/api/garage/near/all`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            longitude,
            latitude,
          }),
        }
      );
      const data = await response.json();
      setGarages(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getLocationAndFetchData = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      try {
        const location = await Location.getCurrentPositionAsync({});
        fetchData(location.coords.longitude, location.coords.latitude);
      } catch (error) {
        console.error("Error getting current location:", error);
      }
    };

    getLocationAndFetchData();
  }, []);

  const navigateToProfileScreen = (garage) => {
    navigation.navigate("Profile", { garages: garage  });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {garages.map((garage) => (
         <TouchableOpacity
         key={garage._id}
         onPress={() => navigateToProfileScreen(garage)}
       >
        <CenterCard
          key={garage._id}
          center={{
            name: garage.repairCenterName,
            location: `${garage.address.street}, ${garage.address.city}`,
            photo: garage.photoUrl,
            rating: 3.5,
            minCharge: garage.minCharge,
            maxCharge: garage.maxCharge,
            phoneNumber: garage.phoneNumber,
            distance: (garage.distance / 1000).toFixed(2),
            allday: garage.allDayService,
          }}
        />
         </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F1EEFF",
    padding: 10,
  },
});

export default NearByCenters;
