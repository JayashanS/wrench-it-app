import React from "react";
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
  return (
    <View style={homestyles.homeApp}>
      <TextInput style={homestyles.searchBar} placeholder="Search" />
      <View style={homestyles.mainContent}>

      <TouchableOpacity style={homestyles.buttonContainer}>
        <Icon name="search" size={30} color="#00aaff" />
        <Text style={homestyles.buttonText}>Find Garages</Text>
      </TouchableOpacity>

        <Button title="My Location" onPress={() => {}} />
        <Button title="Book" onPress={() => {}} />
        <Button title="Calls" onPress={() => {}} />
        <Button title="Chats" onPress={() => {}} />
        <Button title="Ongoing" onPress={() => {}} />
        <Button title="Promos" onPress={() => {}} />
        <Button title="Rides" onPress={() => {}} />
        <Button title="History" onPress={() => {}} />
      </View>
    </View>
  );
};

const homestyles = StyleSheet.create({
  homeApp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#008080',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    backgroundColor: '#008080',
  },
  searchBar: {
    width: '90%',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  navTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
    backgroundColor: '#008080',
  },
  mainContent: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#00aaff',
    fontSize: 18,
    marginLeft: 10,
  },
})

export default HomeScreen;
