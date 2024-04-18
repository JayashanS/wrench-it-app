import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";
import Colors from "../../constants/Colors";

const NewReservationScreen = ({ route }) => {
  const [fault, setFault] = useState("");
  const [licensePlateNo, setLicensePlateNo] = useState("");
  const [model, setModel] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [email, setEmail] = useState("js@gmail.com");
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
  }, []);

  const { id, name, location } = route.params;

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const handleTimeChange = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) {
      setDate(
        new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          selectedTime.getHours(),
          selectedTime.getMinutes()
        )
      );
    }
  };

  const handleSaveReservation = async () => {
    const reservationData = {
      licensePlateNo,
      model,
      fault,
      userEmail: email,
      garageId: id,
      phoneNo,
      date: date.toISOString(),
      status: "Pending",
    };
    console.log(reservationData);
    try {
      const response = await fetch(
        `http://${process.env.EXPO_PUBLIC_IP}:4000/api/reservation`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reservationData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save reservation");
      }

      Alert.alert("Success", "Reservation has been sent successfully.", [
        { text: "OK", onPress: () => navigation.navigate("Reservation") },
      ]);
    } catch (error) {
      console.error("Error saving reservation:", error);
      Alert.alert("Error", "Failed to save reservation. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.repairCenterDetails}>
        <Text style={styles.centerName}>{name}</Text>
        <Text style={styles.centerAddress}>{location}</Text>
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
        <View>
          <Text style={styles.label}>Select Date</Text>
          <Button
            onPress={() => setShowDatePicker(true)}
            title={date.toLocaleDateString()}
            color="#427D9D"
          />
          {showDatePicker && (
            <DateTimePicker
              testID="datePicker"
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={handleDateChange}
            />
          )}
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.label}>Select Time</Text>
          <Button
            onPress={() => setShowTimePicker(true)}
            title={date.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
            color="#427D9D"
          />
          {showTimePicker && (
            <DateTimePicker
              testID="timePicker"
              value={date}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={handleTimeChange}
            />
          )}
        </View>
      </View>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSaveReservation}
      >
        <Text style={styles.submitButtonText}>Submit Reservation</Text>
      </TouchableOpacity>
    </View>
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

export default NewReservationScreen;
