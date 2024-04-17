import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Reservation from "../../components/ReservationCard";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";

const ReservationScreen = () => {
  const navigation = useNavigation();
  const [reservationData, setReservationData] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchEmailFromAsyncStorage = async () => {
      try {
        const userData = await AsyncStorage.getItem("user");
        if (userData) {
          const { email } = JSON.parse(userData);
          setEmail(email);
          fetchReservations(email);
        }
      } catch (error) {
        console.error("Error fetching email from AsyncStorage:", error);
      }
    };

    fetchEmailFromAsyncStorage();
  }, []);

  const fetchReservations = async (userEmail) => {
    try {
      const response = await fetch(
        `http://${process.env.EXPO_PUBLIC_IP}:4000/api/reservation/user/user3@example.com`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch reservations");
      }
      const data = await response.json();
      setReservationData(data);
    } catch (error) {
      console.error("Error fetching reservations:", error);
    }
  };

  const handleAddNewReservation = () => {
    navigation.navigate("List");
  };

  const handleDeleteReservation = async (deletedReservationId) => {
    try {
      const response = await fetch(
        `http://${process.env.EXPO_PUBLIC_IP}:4000/api/reservation/${deletedReservationId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete reservation");
      }
      setReservationData((prevData) =>
        prevData.filter(
          (reservation) => reservation._id !== deletedReservationId
        )
      );
    } catch (error) {
      console.error("Error deleting reservation:", error);
    }
  };

  const handleRefreshReservations = () => {
    fetchReservations(email);
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperSection}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddNewReservation}
        >
          <Text style={styles.addButtonText}>New Reservation</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lowerSection}>
        <View style={styles.header}>
          <Text style={styles.lowerSectionTitle}>Your Reservations</Text>
          <TouchableOpacity onPress={handleRefreshReservations}>
            <Ionicons name="refresh" size={24} color={Colors.dark} />
          </TouchableOpacity>
        </View>
        {reservationData.map((reservation) => (
          <Reservation
            key={reservation._id}
            reservationData={reservation}
            onDelete={handleDeleteReservation}
          />
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginLeft: 20,
  },
  lowerSectionTitle: {
    fontSize: FontSize.large,
    fontWeight: "bold",
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
