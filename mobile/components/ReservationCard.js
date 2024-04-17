import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";

const ReservationCard = ({ reservationData, onDelete }) => {
  const handleDelete = () => {
    onDelete(reservationData._id);
  };

  const repairCenterName =
    reservationData.garageDetails.length > 0
      ? reservationData.garageDetails[0].repairCenterName
      : "Unknown";
  const combinedAddress = reservationData.combinedAddress || "Unknown";

  const formattedDate = new Date(
    reservationData.reservationtDate
  ).toLocaleDateString();
  const formattedTime = new Date(
    reservationData.reservationtTime
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text style={styles.center}>{repairCenterName}</Text>
          <Text style={styles.address}>{combinedAddress}</Text>
          <Text style={styles.details}>{reservationData.model}</Text>
          <Text style={styles.date}>
            {formattedDate} {formattedTime}
          </Text>
          <Text
            style={[
              styles.details,
              {
                color:
                  reservationData.status === "Pending" ||
                  reservationData.status === "Declined"
                    ? "red"
                    : "green",
              },
            ]}
          >
            {reservationData.status}
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
