import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Cell from "../../components/Cell";

const windowWidth = Dimensions.get("window").width;

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToRequest = () => {
    navigation.navigate("Request");
  };
  const goToProfile4 = () => {
    navigation.navigate("Profile");
  };
  const goToProfile3 = () => {
    navigation.navigate("NearByCenters");
  };
  const goToReservation = () => {
    navigation.navigate("Reservation");
  };
  const goToChat = () => {
    navigation.navigate("Chat");
  };
  const goToProfile = () => {
    navigation.navigate("Offers");
  };
  const toEvents = () => {
    navigation.navigate("Events");
  };

  return (
    <View style={styles.homeApp}>
      <View style={styles.row}>
        <Cell iconName="search" label="Find Garages" onPress={goToRequest} />
        <Cell iconName="person" label="Profile" onPress={goToProfile4} />
        <Cell iconName="call" label="Calls" onPress={goToProfile3} />
      </View>

      <View style={styles.row}>
        <Cell iconName="book-sharp" label="Reserve" onPress={goToReservation} />
        <Cell iconName="chatbox" label="Chats" onPress={goToChat} />
        <Cell iconName="settings" label="Ongoing" onPress={() => {}} />
      </View>

      <View style={styles.row}>
        <Cell iconName="bag" label="Offers" onPress={goToProfile} />
        <Cell iconName="list" label="Events" onPress={toEvents} />
        <Cell iconName="car" label="History" onPress={() => {}} />
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
