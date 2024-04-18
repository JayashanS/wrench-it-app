import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import * as Location from "expo-location";
import CenterCard from "../../components/CenterCard";

const GetGarages = () => {
  const [garages, setGarages] = React.useState([]);

  const fetchData = async (longs, lats) => {
    try {
      const response = await fetch(
        `http://${process.env.EXPO_PUBLIC_IP}:4000/api/garage/near/all`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            longitude: longs,
            latitude: lats,
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
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      // Fetch current location
      let location = await Location.getCurrentPositionAsync({});

      // Call fetchData after setting latitude and longitude
      fetchData(location.coords.longitude, location.coords.latitude);
    })();
  }, []);

  return (
    <View>
      {garages &&
        garages.map((garage) => (
          <CenterCard
            key={garage._id}
            center={{
              id: garage.garageId,
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
        ))}
    </View>
  );
};

export default GetGarages;
