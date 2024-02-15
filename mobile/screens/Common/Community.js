import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Members from './Members';
import Offers from './Offers';
import Events from './Events';


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
    <View style={communitystyles.container}>
      <View style={communitystyles.column}>
        <TouchableOpacity style={communitystyles.box} onPress={goToOffers}>
          <View style={communitystyles.boxContent}>
         
           
            <Text style={communitystyles.boxText}>Offers</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={communitystyles.box} onPress={goToMembers}>
          <View style={communitystyles.boxContent}>
            <Text style={communitystyles.boxText}>Members</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={communitystyles.box} onPress={goToEvents}>
          <View style={communitystyles.boxContent}>
            <Text style={communitystyles.boxText}>Events</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const communitystyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: windowWidth * 0.05,
  },
  box: {
    width: windowWidth * 0.9,
    height: windowWidth * 0.5,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: windowWidth * 0.03,
    marginBottom: windowWidth * 0.05,
    borderRadius: windowWidth * 0.03,
    borderWidth: 1.5,
    borderColor: 'black',
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
