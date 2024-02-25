import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const GarageCard = ({ garageData }) => {
  const {
    name,
    services,
    categories,
    address,
    distance,
    photoUrl,
    openingHours,
    closingHours,
  } = garageData;

  const serviceList = Object.keys(services).filter(
    (service) => services[service]
  );
  const categoryList = Object.keys(categories).filter(
    (category) => categories[category]
  );

  const formattedOpeningHours = `${openingHours.slice(
    0,
    2
  )}:${openingHours.slice(2)}`;
  const formattedClosingHours = `${closingHours.slice(
    0,
    2
  )}:${closingHours.slice(2)}`;

  return (
    <TouchableOpacity style={styles.cardContainer}>
      {photoUrl && (
        <Image source={{ uri: photoUrl }} style={styles.cardImage} />
      )}
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{name}</Text>
        <Text style={styles.cardServices}>
          Services: {serviceList.join(", ")}
        </Text>
        {categories.length > 0 && (
          <Text style={styles.cardCategories}>
            Specializes in: {categoryList.join(", ")}
          </Text>
        )}
        <Text style={styles.cardAddress}>
          {address.street}, {address.city}, {address.state} {address.postalCode}
        </Text>
        <Text style={styles.cardDistance}>{distance.toFixed(2)} km away</Text>
        <Text style={styles.cardHours}>
          Opening Hours: {formattedOpeningHours} - {formattedClosingHours}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  cardImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 8,
    marginBottom: 16,
  },
  cardContent: {
    // Add styles for text layout and spacing
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardServices: {
    fontSize: 16,
    // Add styles for service list presentation
  },
  cardCategories: {
    fontSize: 16,
    // Add styles for category list presentation
  },
  cardAddress: {
    fontSize: 14,
    color: "#888",
  },
  cardDistance: {
    fontSize: 14,
    color: "#888",
  },
  cardHours: {
    fontSize: 14,
    color: "#888",
  },
});

export default GarageCard;
