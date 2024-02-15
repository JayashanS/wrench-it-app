import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Members from './Members';
import Offers from './Offers';
import Events from './Events';

// Define BoxItem component or import it if it's defined in another file

const windowWidth = Dimensions.get("window").width;

export default function HomeScreen() {
  const navigation = useNavigation();

  const goToOffers = () => {
    navigation.navigate("Offers");
  };
  const goToMembers = () => {
    navigation.navigate("Members");
  };
  const goToEvents = () => {
    navigation.navigate("Events");
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <BoxItem
          title="Offers"
          content="Company offers will be displayed inside this"
          onPress={goToOffers}
        />
      </View>

      <View style={styles.rowContainer}>
        <BoxItem
          title="Members"
          content="Member since 2021"
          onPress={goToMembers}
        />
      </View>

      <View style={styles.rowContainer}>
        <BoxItem
          title="Events"
          content="Date: April 10, 2024"
          onPress={goToEvents}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  boxContent: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
  },
});
