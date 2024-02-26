import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TwentyFourSevenBadge = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>24/7 Service</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00cc00",
    padding: 5,
    borderRadius: 20,
    elevation: 5,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default TwentyFourSevenBadge;
