import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
  return (
    <View style={homestyles.homeApp}>
      <TextInput style={homestyles.searchBar} placeholder="Search" />
      <View style={homestyles.mainContent}>
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#D9D9D9', padding: 10}}>
        {/* Icon */}
        <Icon name="search" size={30} color="white" style={{ marginRight: 10 }} />

        {/* Text or other content */}
        <Text style={{ color: 'white', fontSize: 20 }}>Find Garages</Text>
      </View>
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
})

export default HomeScreen;
