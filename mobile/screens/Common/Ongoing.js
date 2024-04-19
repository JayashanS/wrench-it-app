import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

const OngoingScreen = () => {
  const navigation = useNavigation();
  const imagePaths = [require("../../assets/repairIcon.jpg")];
  const goBackHome = () => {
    navigation.navigate("Home"); // Navigate to the "Home" screen
  };
  const route = useRoute();
  const { garages } = route.params || {};
  console.log("Garages object:", garages);
  return (
    <View style={styles.ongoingContainer}>
      <View style={styles.imageContainer}>
        {imagePaths.map((path, index) => (
          <Image key={index} source={path} style={styles.image} />
        ))}
      </View>
      <View style={styles.Time}>
        <Text style={styles.headFont}> AMK Repair Center</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.label}>Status:Registered </Text>
        <Text style={styles.value}>Pending</Text>
        <Text style={styles.label}>Time: </Text>
        <Text style={styles.value}>09:24 am</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  ongoingContainer: {
    backgroundColor: "#F1EEFF",
    borderRadius: 10,
    width: "100%",
    paddingBottom: 5,
    height: 150,
    paddingLeft: 10,
    alignItems: "flex-start",
    flexDirection: "row",
  },
  headFont: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 10,
    color: "#125C75",
  },
  imageContainer: {
    alignItems: "center",
    paddingTop: 40,
    paddingRight: 0,
  },
  image: {
    width: 100,
    height: 100,
  },

  detailsContainer: {
    flex: 1,
    //justifyContent:"center",
    alignItems: "flex-start",
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 20,
  },
  rowContainer: {
    flexDirection: "column",
    paddingRight: 10,
    paddingLeft: -50,
    paddingTop: 50,
    alignItems: "flex-start",
  },
  label: {
    fontWeight: "bold",
    marginRight: 1,
    fontSize: 18,
    color: "#3F3432",
  },
  value: {
    color: "#125C75",
    marginRight: 20,
  },
});
export default OngoingScreen;
