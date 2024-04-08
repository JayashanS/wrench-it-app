// CenterCard.js
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CenterCard = ({ center }) => {
  const {
    name,
    location,
    photo,
    rating,
    minCharge,
    maxCharge,
    phoneNumber,
    distance,
    allday,
  } = center;

  return (
    <View style={styles.cardContainer}>
      <Image source={require("../../assets/repairIcon.jpg")}  style={styles.photo} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.location}>{location}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{rating}</Text>
          <Text style={styles.ratingText}>Rating</Text>
          <Text style={styles.distance}>  {distance} km</Text>
        </View>
     
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  photo: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  detailsContainer: {
    padding: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    justifyContent: "space-between", 
  },
  location: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
    color: "#007bff",
  },
  ratingText: {
    fontSize: 16,
    color: "#888",
  },
  distance: {
    fontSize: 16,
    color: "#D37272", 
  },
 
});

export default CenterCard;
