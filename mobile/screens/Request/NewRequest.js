import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from "expo-location";
import socketIOClient from "socket.io-client";
import Colors from "../../constants/Colors";

const ENDPOINT = `http://${process.env.EXPO_PUBLIC_IP}:4000`;

const NewRequest = ({ route }) => {
  const [fault, setFault] = useState("");
  const [licensePlateNo, setLicensePlateNo] = useState("");
  const [model, setModel] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [date, setDate] = useState(new Date());
  const [email, setEmail] = useState("js@gmail.com");
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchEmailFromAsyncStorage = async () => {
      try {
        const userData = await AsyncStorage.getItem("user");
        if (userData) {
          const { email } = JSON.parse(userData);
          setEmail(email);
        }
      } catch (error) {
        console.error("Error fetching email from AsyncStorage:", error);
      }
    };

    fetchEmailFromAsyncStorage();

    const currentDate = new Date();
    setDate(currentDate);

    getLocation();
  }, []);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.error("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLongitude(location.coords.longitude);
    setLatitude(location.coords.latitude);
  };

  const { garageId, centerName } = route.params;

  const handleRequest = async () => {
    const requestData = {
      licensePlateNo,
      model,
      fault,
      userEmail: email,
      garageId,
      phoneNo,
      date: date.toISOString(),
      longitude,
      latitude,
      status: "Pending",
      response: "",
    };
    console.log(requestData);
    try {
      const response = await fetch(
        `http://${process.env.EXPO_PUBLIC_IP}:4000/api/request`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save reservation");
      }

      Alert.alert("Success", "Request has been sent successfully.", [
        { text: "OK", onPress: () => navigation.navigate("Reservation") },
      ]);

      // Emit location event to the server
      const socket = socketIOClient(ENDPOINT);
      socket.emit("location", { longitude, latitude });
    } catch (error) {
      console.error("Error saving request:", error);
      Alert.alert("Error", "Failed to save request. Please try again.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.repairCenterDetails}>
        <Text style={styles.centerName}>{centerName}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>License Plate Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter license plate number"
          value={licensePlateNo}
          onChangeText={setLicensePlateNo}
        />
        <Text style={styles.label}>Model</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter model"
          value={model}
          onChangeText={setModel}
        />
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter phone number"
          keyboardType="phone-pad"
          value={phoneNo}
          onChangeText={setPhoneNo}
        />
        <Text style={styles.label}>Fault</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter fault"
          value={fault}
          onChangeText={setFault}
          multiline
          numberOfLines={4}
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleRequest}>
        <Text style={styles.submitButtonText}>Request</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  repairCenterDetails: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
  },
  centerName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: Colors.dark,
  },
  centerAddress: {
    fontSize: 14,
    color: Colors.light,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: Colors.dark,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    padding: 20,
    marginHorizontal: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default NewRequest;
