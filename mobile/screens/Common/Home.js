import React from "react";
import { StyleSheet, View } from "react-native";
import {
  StyleSheetView,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Request from "../../routes/RequestNavigator";
import { NavigationContainer } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;

export default function HomeScreen() {
  const navigation = useNavigation();

  const goToProfile = () => {
    navigation.navigate("Profile");
  };
  const goToRequest = () => {
    navigation.navigate("Request");
  };
  return (
    <NavigationContainer>
    <View style={homestyles.homeApp}>
      {/*<TextInput style={homestyles.searchBar} placeholder="Search" />*/}
      <View style={homestyles.row}>
        <TouchableOpacity style={homestyles.cell} onPress={goToRequest}>
          <View style={homestyles.buttonContent}>
            <Text style={homestyles.buttonText}>Find Garages</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={homestyles.cell} onPress={() => {}}>
          <View style={homestyles.buttonContent}>
            <Text style={homestyles.buttonText}>Book</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={homestyles.cell} onPress={() => {}}>
          <View style={homestyles.buttonContent}>
            <Text style={homestyles.buttonText}>Calls</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={homestyles.row}>
        <TouchableOpacity style={homestyles.cell} onPress={() => {}}>
          <View style={homestyles.buttonContent}>
            <Text style={homestyles.buttonText}>Find Garages</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={homestyles.cell} onPress={() => {}}>
          <View style={homestyles.buttonContent}>
            <Text style={homestyles.buttonText}>Book</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={homestyles.cell} onPress={() => {}}>
          <View style={homestyles.buttonContent}>
            <Text style={homestyles.buttonText}>Calls</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={homestyles.row}>
        <TouchableOpacity style={homestyles.cell} onPress={goToProfile}>
          <View style={homestyles.buttonContent}>
            <Text style={homestyles.buttonText}>Profile(Imalsha)</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={homestyles.cell} onPress={() => {}}>
          <View style={homestyles.buttonContent}>
            <Text style={homestyles.buttonText}>Book</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={homestyles.cell} onPress={() => {}}>
          <View style={homestyles.buttonContent}>
            <Text style={homestyles.buttonText}>Calls</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    </NavigationContainer>
  );
}

const homestyles = StyleSheet.create({
  homeApp: {
    flex: 1,
    flexDirection: "column",
    margin: windowWidth * 0.1,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    marginBottom: windowWidth * 0.05,
    paddingLeft: windowWidth * 0.04,
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#176B87",
    borderRadius: 5,
    height: windowWidth * 0.35,
    marginRight: windowWidth * 0.04,
    padding: windowWidth * 0.01,
  },
  searchBar: {
    width: "90%",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  navTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    padding: 10,
    backgroundColor: "#008080",
  },
  mainContent: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
});
