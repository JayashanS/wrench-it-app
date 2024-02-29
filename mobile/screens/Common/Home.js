import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Cell from "../../components/Cell";

const windowWidth = Dimensions.get("window").width;

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToCell_1 = () => {
    navigation.navigate("Request");
  };
  const goToCell_2 = () => {
    navigation.navigate("Profile");
  };
  const goToCell_3 = () => {
    navigation.navigate("NearByCenters");
  };
  const goToCell_4 = () => {
    navigation.navigate("Reservation");
  };
  const goToCell_5 = () => {
    navigation.navigate("Chat");
  };
  const goToCell_6 = () => {
    navigation.navigate("Offers");
  };
  const goToCell_7 = () => {
    navigation.navigate("Offers");
  };
  const goToCell_8 = () => {
    navigation.navigate("Events");
  };
  const goToCell_9 = () => {
    navigation.navigate("Events");
  };

  return (
    <View style={styles.homeApp}>
      <View style={styles.row}>
        <Cell iconName="search" label="Find Garages" onPress={goToCell_1} />
        <Cell iconName="person" label="Profile" onPress={goToCell_2} />
        <Cell iconName="call" label="Calls" onPress={goToCell_3} />
      </View>

      <View style={styles.row}>
        <Cell iconName="book-sharp" label="Reserve" onPress={goToCell_4} />
        <Cell iconName="chatbox" label="Chats" onPress={goToCell_5} />
        <Cell iconName="settings" label="Ongoing" onPress={goToCell_6} />
      </View>

      <View style={styles.row}>
        <Cell iconName="bag" label="Offers" onPress={goToCell_7} />
        <Cell iconName="list" label="Events" onPress={goToCell_8} />
        <Cell iconName="car" label="History" onPress={goToCell_9} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeApp: {
    flex: 1,
    flexDirection: "column",
    margin: windowWidth * 0.1,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    marginBottom: windowWidth * 0.05,
    paddingLeft: windowWidth * 0.02,
  },
});

export default HomeScreen;
