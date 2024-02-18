import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import io from "socket.io-client";
import { FontAwesome } from "@expo/vector-icons";
const CallScreen = () => {
  const handleCallAccept = () => {
    const socket = io("http://192.168.184.68:4000");
    socket.emit("location", data);
    console.log("Location sent to server");
  };

  const handleCallDecline = () => {
    console.log("Call declined");
  };

  useEffect(() => {
    const socket = io("http://192.168.238.68:4000");

    socket.on("location", (data) => {
      console.log("Received location from server:", data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  const data = {
    coordinates: [
      { latitude: 40.7128, longitude: -74.006 },
      { latitude: 34.0522, longitude: -118.2437 },
      { latitude: 51.5074, longitude: -0.1278 },
      // Add more coordinates as needed
    ],
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleCallAccept}>
        <FontAwesome name="phone" size={24} color="green" />
        <Text style={styles.buttonText}>Accept</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleCallDecline}>
        <FontAwesome name="phone" size={24} color="red" />
        <Text style={styles.buttonText}>Decline</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default CallScreen;
