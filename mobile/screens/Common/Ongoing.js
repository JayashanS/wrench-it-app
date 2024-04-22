import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import socketIOClient from "socket.io-client";
const ENDPOINT = `http://${process.env.EXPO_PUBLIC_IP}:4000`;

const OngoingScreen = () => {
  const navigation = useNavigation();
  const imagePaths = [require("../../assets/repairIcon.jpg")];
  const [requestData, setRequestData] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchEmailFromAsyncStorage = async () => {
      try {
        const userData = await AsyncStorage.getItem("user");
        if (userData) {
          const { email } = JSON.parse(userData);
          setEmail(email);
          fetchRequests(email);
        }
      } catch (error) {
        console.error("Error fetching email from AsyncStorage:", error);
      }
    };

    fetchEmailFromAsyncStorage();

    const socket = socketIOClient(ENDPOINT);
    socket.on("responding", () => {
      fetchRequests(email);
    });

    return () => {
      socket.disconnect();
    };
  }, [email]);

  const fetchRequests = async (userEmail) => {
    try {
      const response = await fetch(
        `http://${process.env.EXPO_PUBLIC_IP}:4000/api/request/user/${userEmail}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch reservations");
      }
      const data = await response.json();
      setRequestData(data);
    } catch (error) {
      console.error("Error fetching reservations:", error);
    }
  };

  const cancel = async (id) => {
    try {
      const response = await fetch(
        `http://${process.env.EXPO_PUBLIC_IP}:4000/api/request/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to cancel request");
      }

      console.log("Request cancelled successfully");
      fetchRequests(email);
    } catch (error) {
      console.error("Error cancelling request:", error);
    }
  };

  const openPhoneDialer = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const opentracklocation = () => {
    // Add your logic to open track location here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {requestData.map((request, index) => (
        <View key={index} style={styles.ongoingContainer}>
          <View style={styles.detailsContainer}>
            <View style={styles.imageContainer}>
              {imagePaths.map((path, index) => (
                <View key={index} style={styles.rowContainer}>
                  <Image source={path} style={styles.image} />
                  <Text style={styles.headFont}>Request Details</Text>
                </View>
              ))}
            </View>
            <View style={styles.rowContainer}>
              <Text style={styles.label}>Model: </Text>
              <Text style={styles.value}>{request.model}</Text>
            </View>
            <View style={styles.rowContainer}>
              <Text style={styles.label}>License Plate No: </Text>
              <Text style={styles.value}>{request.licensePlateNo}</Text>
            </View>
            <View style={styles.horizontalLine}></View>
            <View style={styles.locationContainer}>
              <Text style={styles.label}>
                {" "}
                {request.garageDetails[0].repairCenterName}
              </Text>
              <Ionicons name="location-sharp" size={20} color="green" />
              <Text
                style={[styles.value, { flexWrap: "wrap", flex: 1 }]}
                numberOfLines={3}
              >
                {request.combinedAddress}
              </Text>
            </View>
            <View style={styles.horizontalLine}></View>
            <View style={styles.rowContainer}>
              <Text style={styles.label}>Status: </Text>
              <Text style={styles.value}>
                {request.status === "Incoming" ? "Pending" : request.status}
              </Text>
              <Text style={styles.label}>Time: </Text>
              <Text style={styles.value}>
                {new Date(request.date).toLocaleTimeString()}
              </Text>
            </View>
            {request.response && request.response !== "" && (
              <View style={styles.rowContainer}>
                <Text style={styles.label}>
                  {request.garageDetails[0].repairCenterName} says:{" "}
                </Text>
                <Text style={styles.value}>{request.response}</Text>
              </View>
            )}

            <View style={styles.actionContainer}>
              <View style={styles.contactContainer}>
                <TouchableOpacity
                  onPress={() => openPhoneDialer(request.phoneNo)}
                >
                  <View style={styles.contact}>
                    <Ionicons name="call-sharp" size={20} color="gray" />
                    <Text style={styles.contacttext}> Call</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.locateContainer}>
                <TouchableOpacity onPress={opentracklocation}>
                  <View style={styles.locate}>
                    <Ionicons name="location-sharp" size={20} color="gray" />
                    <Text style={styles.locatetext}> Track</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.cancelContainer}>
                <TouchableOpacity onPress={() => cancel(request._id)}>
                  <View style={styles.contact}>
                    <Ionicons name="close-sharp" size={20} color="gray" />

                    <Text style={styles.contacttext}> Cancel</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
  },
  ongoingContainer: {
    backgroundColor: "#F1EEFF",
    borderRadius: 10,
    width: "90%",
    paddingBottom: 5,
    height: 400,
    paddingLeft: 10,
    alignItems: "flex-start",
    flexDirection: "row",
    margin: 10,
    marginTop: 10,
    elevation: 3,
  },
  headFont: {
    fontWeight: "bold",
    fontSize: 24,
    padding: 15,
    paddingTop: 30,
    color: "#125C75",
  },
  imageContainer: {
    alignItems: "center",
    paddingTop: 10,
  },
  image: {
    width: 80,
    height: 80,
  },
  detailsContainer: {
    flex: 1,
    alignItems: "flex-start",
    paddingTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
  },
  rowContainer: {
    flexDirection: "row",
    paddingRight: 10,
    paddingTop: 5,
    alignItems: "flex-start",
  },
  locationContainer: {
    flexDirection: "row",
    paddingRight: 0,
    paddingTop: 5,
    alignItems: "flex-start",
  },
  label: {
    fontWeight: "bold",
    marginRight: 5,
    fontSize: 18,
    marginBottom: 0,
    color: "#3F3432",
  },
  value: {
    color: "#125C75",
    padding: 4,
  },
  horizontalLine: {
    borderBottomColor: "#3F3432",
    borderBottomWidth: 1,
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },
  actionContainer: {
    flexDirection: "row",
    paddingTop: 10,
  },
  contactContainer: {
    backgroundColor: "#125C75",
    borderRadius: 5,
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginRight: 10,
  },
  cancelContainer: {
    backgroundColor: "#125C75",
    borderRadius: 5,
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: 10,
  },
  contacttext: {
    color: "#FFFFFF",
  },
  contact: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  locateContainer: {
    backgroundColor: "#125C75",
    borderRadius: 5,
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingLeft: 10,
    marginLeft: 0,
  },
  locatetext: {
    color: "#FFFFFF",
  },
  locate: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default OngoingScreen;
