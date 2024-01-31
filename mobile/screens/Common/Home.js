import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import {
  StyleSheetView,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width; {/*Define the width of the window using the Dimensions module*/}

export default function HomeScreen() {
  const navigation = useNavigation();

  const goToProfile = () => {
    navigation.navigate("Profile");
  };
  const goToProfile3 = () => {
    navigation.navigate("NearByCenters");
  };
  const goToProfile4 = () => {
    navigation.navigate("Profile");
  };
  const goToRequest = () => {
    navigation.navigate("Request");
  };
  const goToReservation = () => {
    navigation.navigate("Reservation");
  };
  const goToProfile2 = () => {
    navigation.navigate("Main", {
      index: "second",
    });
  };

  return (
    <View style={homestyles.homeApp}>
      {/*<TextInput style={homestyles.searchBar} placeholder="Search" />*/}
      
      <View style={homestyles.row}>
        <TouchableOpacity style={homestyles.cell} onPress={goToRequest}>
          <Icon/>
          <View style={homestyles.buttonContent}>
          <Ionicons name="search" size={80} color="#125C75" />
            <Text style={homestyles.buttonText}>Find Garages</Text>
          </View>
        </TouchableOpacity>


        
        
        <TouchableOpacity style={homestyles.cell} onPress={goToProfile4}>
          <View style={homestyles.buttonContent}>
          <Ionicons name="person" size={80} color="#125C75" marginBottom={10}/>
            <Text style={homestyles.buttonText}>Profile</Text>
          </View>
        </TouchableOpacity>


        

        <TouchableOpacity style={homestyles.cell} onPress={goToProfile3}>

          <View style={homestyles.buttonContent}>
          <Ionicons name="call" size={80} color="#125C75" marginBottom={10}/>
            <Text style={homestyles.buttonText}>Calls</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={homestyles.row}>
        <TouchableOpacity style={homestyles.cell} onPress={goToReservation}>
          <View style={homestyles.buttonContent}>
          <Ionicons name="book-sharp" size={80} color="#125C75"  marginRight={10}/>
            <Text style={homestyles.buttonText}>Reserve</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={homestyles.cell} onPress={() => {}}>
          <View style={homestyles.buttonContent}>
          <Ionicons name="chatbox" size={80} color="#125C75"  marginRight={10}/>
            <Text style={homestyles.buttonText}>Chats</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={homestyles.cell} onPress={() => {}}>
          <View style={homestyles.buttonContent}>
          <Ionicons name="settings" size={80} color="#125C75"  marginRight={10}/>
            <Text style={homestyles.buttonText}>Ongoing</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={homestyles.row}>
        <TouchableOpacity style={homestyles.cell} onPress={goToProfile}>
          <View style={homestyles.buttonContent}>
          <Ionicons name="bag" size={80} color="#125C75"  marginRight={10}/>
            <Text style={homestyles.buttonText}>Promos</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={homestyles.cell} onPress={() => {}}>
          <View style={homestyles.buttonContent}>
          <Ionicons name="car" size={80} color="#125C75"  marginRight={10}/>
            <Text style={homestyles.buttonText}>Rides</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={homestyles.cell} onPress={() => {}}>
          <View style={homestyles.buttonContent}>
          <Ionicons name="list" size={80} color="#125C75"  marginRight={10}/>
            <Text style={homestyles.buttonText}>History</Text>
          </View> 
        </TouchableOpacity>
      </View>
    </View>
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
    paddingLeft: windowWidth * 0.02,
  },
  cell: {
    flex: 1,
    //borderWidth: 1,
    //borderColor: "#176B87",
    backgroundColor:"#D9D9D9",
    borderRadius: 5,
    height: windowWidth * 0.4,
    marginRight: windowWidth * 0.02,
    padding: windowWidth * 0.02,
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
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
    padding:10,
    color: "#125C75",

  },
});
