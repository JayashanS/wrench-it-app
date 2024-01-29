import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Members from "./Members";
import Events from "./Events";
import offers from "./Offers";

const windowWidth = Dimensions.get("window").width;

const BoxItem = ({ title, content, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.box}>
      <Text style={styles.boxTitle}>{title}</Text>
      <Text>{content}</Text>
    </TouchableOpacity>
  );
};

const CommunityPage = () => {
  const navigation = useNavigation();
  const goToEvents = () => {
    navigation.navigate("Events");
  };
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <BoxItem
          title="Offers"
          content="Company offers will be displayed inside this"
          onPress=""
        />
      </View>

      <View style={styles.rowContainer}>
        <BoxItem
          title="Members"
          content="Member since 2021"
          onPress={() => navigation.navigate("Members")}
        />
      </View>

      <View style={styles.rowContainer}>
        <BoxItem
          title="Events"
          content="Date: April 10, 2024"
          onPress={() => navigation.navigate("Event")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: windowWidth * 0.05,
    paddingLeft: windowWidth * 0.005,
  },
  box: {
    flex: 1,
    width: "90%",
    height: windowWidth * 0.45,
    borderWidth: 1.2,
    borderColor: "#176B87",
    padding: windowWidth * 0.03,
    marginBottom: windowWidth * 0.05,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 5,
    shadowColor: "#176B87",
  },
  boxTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default CommunityPage;
