import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Reservation from "../../components/ReservationCard";
import Font from "../../constants/Fonts";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";

const ReservationScreen = () => {
  const navigation = useNavigation();

  const reservationData = [
    {
      id: 1,
      vehicleType: "Toyota Camry",
      description: "Routine checkup and oil change",
      address: "123 Main St, City, State",
      repairCenter: "ABC Auto Repairs",
      reservationStatus: "Pending",
      reservationDate: "2024-04-09",
      reservationTime: "10:00 AM",
    },
    {
      id: 2,
      vehicleType: "Honda Accord",
      description: "Brake replacement",
      address: "456 Elm St, City, State",
      repairCenter: "XYZ Mechanics",
      reservationStatus: "Approved",
      reservationDate: "2024-04-09",
      reservationTime: "11:30 AM",
    },
  ];

  const handleAddNewReservation = () => {
    navigation.navigate("NewReservation", {
      repairCenterName: "Your Repair Center Name",
      repairCenterAddress: "Your Repair Center Address",
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperSection}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddNewReservation}
        >
          <Text style={styles.addButtonText}>Add New Reservation</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lowerSection}>
        <Text style={styles.lowerSectionTitle}>Your Reservations</Text>
        {reservationData.map((reservation) => (
          <Reservation key={reservation.id} reservationData={reservation} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingVertical: 20,
  },
  upperSection: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
  },
  lowerSection: {
    flex: 1,
    marginTop: 10,
  },
  lowerSectionTitle: {
    fontSize: FontSize.large,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 20,
  },
  addButton: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    padding: 20,
    marginHorizontal: 20,
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
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ReservationScreen;
