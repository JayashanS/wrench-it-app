import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Cell from "../../components/Cell";

const windowWidth = Dimensions.get("window").width;

const HomeScreen = () => {
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

  const goToChat = () => {
    navigation.navigate("Chat");
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

      <View style={styles.row}>
        <Cell iconName="book-sharp" label="Reserve" onPress={goToReservation} />
        <Cell iconName="chatbox" label="Chats" onPress={goToChat} />
        <Cell iconName="settings" label="Ongoing" onPress={() => {}} />
      </View>

      <View style={styles.row}>
        <Cell iconName="bag" label="Promos" onPress={goToProfile} />
        <Cell iconName="car" label="Rides" onPress={() => {}} />
        <Cell iconName="list" label="History" onPress={() => {}} />
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
