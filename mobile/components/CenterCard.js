import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Rating from "./Rating"; // Assuming you have a Rating component

const CenterCard = ({ center }) => {
  const { name, location, photo, rating, minCharge, maxCharge } = center;

  return (
    <View style={styles.card}>
      <View style={styles.leftContent}>
        <Image source={{ uri: photo }} style={styles.photo} />
      </View>
      <View style={styles.middleContent}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.location}>{location}</Text>
        <View style={styles.ratingContainer}>
          <Rating value={rating} size={16} />
        </View>
        <View style={styles.charges}>
          <Text style={styles.chargeText}>Min: {minCharge}</Text>
          <Text style={styles.chargeText}>Max: {maxCharge}</Text>
        </View>
      </View>
      <View style={styles.rightContent}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 0,
  },
  leftContent: {
    marginRight: 20,
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  middleContent: {
    flex: 1,
    marginRight: 20,
  },
  rightContent: {
    justifyContent: "space-between",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  ratingContainer: {
    marginBottom: 5,
  },
  charges: {
    flexDirection: "row",
    marginBottom: 5,
  },
  chargeText: {
    marginRight: 10,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CenterCard;
