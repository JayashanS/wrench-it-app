import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import Rating from "./Rating";

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
  } = center;

  const handleCallPress = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

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
        <TouchableOpacity onPress={handleCallPress}>
          <Text style={styles.phoneNumber}>{phoneNumber}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rightContent}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleCallPress}>
          <Text style={styles.buttonText}>Dial</Text>
        </TouchableOpacity>
        <Text style={styles.distance}>{`${distance} km away`}</Text>
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
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  middleContent: {
    flex: 1,
    marginRight: 20,
  },
  rightContent: {},
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
  distance: {
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
    marginBottom: 5,
    marginTop: 0,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  phoneNumber: {
    color: "#007bff",
    textDecorationLine: "underline",
    marginBottom: 5,
  },
});

export default CenterCard;
