import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Community = () => {
  const navigation = useNavigation();
  const navigateToOffers = () => {
    navigation.navigate("Offers");
  };

  const navigateToEvents = () => {
    navigation.navigate("Events");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={navigateToOffers}>
        <Text style={styles.buttonText}>Offers</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToEvents}>
        <Text style={styles.buttonText}>Events</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Community;
