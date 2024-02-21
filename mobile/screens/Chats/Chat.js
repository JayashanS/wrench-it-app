import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import io from "socket.io-client";

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
});

const App = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const socket = io("http://192.168.238.68:4000");

    socket.on("location", (data) => {
      console.log("Received location from server:", data);
      setLocation(data); // Update the state with the received location
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessageToServer = async () => {
    try {
      const { status } = await requestForegroundPermissionsAsync();

      if (status === "granted") {
        const { coords } = await getCurrentPositionAsync();
        console.log("Location obtained:", coords);

        const socket = io("http://192.168.184.68:4000");
        socket.emit("location", coords);
        console.log("Location sent to server");
      } else {
        console.warn("Location permission denied");
      }
    } catch (error) {
      console.error("Error getting location:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.bigBlue}>
        Received Location:{" "}
        {location
          ? `Latitude: ${location.latitude}, Longitude: ${location.longitude}`
          : "No location received"}
      </Text>
      <Button title="Send Location" onPress={sendMessageToServer} />
    </View>
  );
};

export default App;
