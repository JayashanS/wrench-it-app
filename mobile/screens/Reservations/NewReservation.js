import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Colors from "../../constants/Colors";

const NewReservationScreen = ({ route }) => {
  const [description, setDescription] = useState(""); // State variable for description
  const [userName, setUserName] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const { repairCenterName, repairCenterAddress } = route.params;

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const handleTimeChange = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) {
      setTime(selectedTime);
    }
  };

  const handleSaveReservation = () => {
    // Perform save operation here
    // For demonstration purposes, show an alert message
    Alert.alert("Success", "Reservation saved successfully!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.repairCenterDetails}>
        <Text style={styles.centerName}>{repairCenterName}</Text>
        <Text style={styles.centerAddress}>{repairCenterAddress}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={userName}
          onChangeText={setUserName}
        />
        <Text style={styles.label}>Vehicle</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter vehicle"
          value={vehicle}
          onChangeText={setVehicle}
        />
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter phone number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter description"
          value={description}
          onChangeText={setDescription}
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
            title={time.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
            color="#427D9D"
          />
          {showTimePicker && (
            <DateTimePicker
              testID="timePicker"
              value={time}
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
  saveButton: {
    padding: 20,
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
