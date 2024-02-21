import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Events = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Events Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Events;
