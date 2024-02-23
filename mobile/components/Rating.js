import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Assuming you're using Expo for icons

const Rating = ({ value }) => {
  // Function to render stars based on the rating value
  const renderStars = () => {
    const stars = [];
    const maxValue = 5;

    // Loop to render all five stars
    for (let i = 1; i <= maxValue; i++) {
      // Determine whether to render a filled star, half star, or empty star
      let iconName;
      if (i <= value) {
        iconName = "star";
      } else if (i - value === 0.5) {
        iconName = "star-half";
      } else {
        iconName = "star-outline";
      }

      // Push the appropriate icon component to the stars array
      stars.push(
        <Ionicons name={iconName} size={15} color="#FFD700" key={i} />
      );
    }

    return stars;
  };

  return (
    <View style={styles.container}>
      {renderStars()}
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  value: {
    marginLeft: 5,
    fontSize: 16,
    color: "#555",
  },
});

export default Rating;
