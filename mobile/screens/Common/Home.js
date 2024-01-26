import React from "react";
import { View, Text, TextInput, Button } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={homestyles.homeApp}>
      <View style={homestyles.header}>
        <Text>Wrench it</Text>
        <Button title="Menu" onPress={() => {}} />
      </View>
      <TextInput style={homestyles.searchBar} placeholder="Search" />
      <View style={styles.navTabs}>
        <Button title="Home" onPress={() => {}} />
        <Button title="Ongoing" onPress={() => {}} />
        <Button title="Shop" onPress={() => {}} />
      </View>
      <View style={homestyles.mainContent}>
        <Button title="Find Garages" onPress={() => {}} />
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

const homestyles=StyleSheet.create({
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
