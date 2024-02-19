import React from "react";
import { TextInput, StyleSheet, Dimensions } from "react-native";
import Font from "../constants/Fonts";

const windowWidth = Dimensions.get("window").width;

const CustomTextInput = ({ placeholder, onChangeText, value }) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: windowWidth * 0.85,
    height: windowWidth * 0.125,
    borderRadius: windowWidth * 0.025,
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: Font["poppins-regular"],
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
  },
});

export default CustomTextInput;
