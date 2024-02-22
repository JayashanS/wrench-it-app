import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Font from "../constants/Fonts";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";

const windowWidth = Dimensions.get("window").width;

const Cell = ({ iconName, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.cell} onPress={onPress}>
      <View style={styles.buttonContent}>
        <View style={styles.iconContainer}>
          <Ionicons name={iconName} size={40} color="#fff" />
        </View>
        <Text style={styles.buttonText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    height: windowWidth * 0.4,
    marginRight: windowWidth * 0.02,
    padding: windowWidth * 0.02,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    fontFamily: Font["poppins-semiBold"],
    fontSize: FontSize.small,
    color: "#125C75",
  },
});

export default Cell;
