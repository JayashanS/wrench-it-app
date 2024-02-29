import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  Dimensions,
} from "react-native";
import Rating from "./Rating";
import Badge from "./Badge";
import Font from "../constants/Fonts";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";

const windowWidth = Dimensions.get("window").width;

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

  const handleCallPress = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <TouchableOpacity style={styles.card}>
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
        <View>
          <Text style={styles.phoneNumber}>{phoneNumber}</Text>
        </View>
      </View>
      <View style={styles.rightContent}>
        <Text style={styles.distance}>{`${distance} km away`}</Text>
        {allday ? <Text style={styles.day}>24/7 Service</Text> : <View></View>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
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
    marginTop: 5,
    padding: 5,
    fontSize: 14,
    color: Colors.red,
    borderRadius: 20,
    borderColor: Colors.red,
    borderWidth: 1,
    alignSelf: "flex-start",
  },
  day: {
    marginTop: 5,
    width: windowWidth * 0.2,
    padding: 5,
    fontSize: 14,
    color: Colors.green,
    borderRadius: 20,
    borderColor: Colors.green,
    borderWidth: 1,
    alignSelf: "flex-start",
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
    marginBottom: 0,
    marginTop: 5,
    alignItems: "center",
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: FontSize.medium,
  },
  phoneNumber: {
    color: "#007bff",
    marginBottom: 5,
  },
});

export default CenterCard;
