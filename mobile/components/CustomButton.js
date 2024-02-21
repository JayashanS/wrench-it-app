import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import Font from "../constants/Fonts";

const windowWidth = Dimensions.get("window").width;

const CustomButton = ({ title, onPress, backgroundColor }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, { backgroundColor }]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: windowWidth * 0.85,
    height: windowWidth * 0.125,
    borderRadius: windowWidth * 0.025,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    elevation: 3,
  },
  buttonText: {
    fontFamily: Font["poppins-semiBold"],
    color: "#fff",
    fontSize: 16,
  },
});

export default CustomButton;
