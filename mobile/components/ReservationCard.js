import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";

const ReservationCard = ({ reservationData }) => {
  const handleDelete = () => {
    // Implement delete functionality here
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text style={styles.center}>{reservationData.repairCenter}</Text>
          <Text style={styles.address}>{reservationData.address}</Text>
          <Text style={styles.details}>{reservationData.vehicleType}</Text>
          <Text style={styles.date}>
            {reservationData.reservationDate} {reservationData.reservationTime}
          </Text>
          <Text
            style={[
              styles.details,
              {
                color:
                  reservationData.reservationStatus === "Pending" ||
                  reservationData.reservationStatus === "Declined"
                    ? "red"
                    : "green",
              },
            ]}
          >
            {reservationData.reservationStatus}
          </Text>
        </View>
        <TouchableOpacity onPress={handleDelete}>
          <Ionicons name="trash-bin-outline" size={24} color={Colors.dark} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoContainer: {
    flexDirection: "row",
  },
  info: {
    flex: 3,
  },
  center: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.dark,
    marginBottom: 0,
  },
  address: {
    fontSize: 14,
    marginBottom: 5,
    color: Colors.light,
  },
  date: {
    fontSize: 16,
    marginBottom: 0,
    color: Colors.light,
  },
  details: {
    fontSize: 16,
    color: Colors.dark,
    marginBottom: 0,
  },
});

export default ReservationCard;
