import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Billing = () => {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Review Auto Care</Text>
        <Text style={styles.address}>No.65, Galle Road, Colombo</Text>

        <View style={styles.info}>
          <Text>Vehicle: AB12365</Text>
          <Text>Model: Toyota</Text>
          <Text>Started on 20/04/2024.</Text>
        </View>

        <View style={styles.diagnosis}>
          <Text style={{color: '#1782A6', fontWeight: 'bold'}}>Diagnosis:</Text>
          <Text>Intermittent engine misfire during acceleration, accompanied by a slight hesitation in power delivery. Occurs primarily when the vehicle is cold and diminishes as it warms up. No abnormal noises or warning lights present. Suspected ignition coil or spark plug issue.</Text>
        </View>

        <View style={styles.parts}>
          <Text style={{color:'gray', fontWeight:'bold'}}>Parts Replaced:</Text>
          {['Part 1', 'Part 2', 'Part 3', 'Part 4'].map((part, index) => (
            <Text key={index}>{part}: $5.00</Text>
          ))}
        </View>

        <View style={styles.services}>
          <Text style={{color:'gray' , fontWeight: 'bold'}}>Services and Charges:</Text>
          {['Service 1', 'Service 2', 'Service 3', 'Service 4'].map((service, index) => (
            <Text key={index}>{service}: $5.00</Text>
          ))}
        </View>
        <View style={{borderTopColor:'#1782A6',borderTopWidth:2}}>
          <Text style={{fontWeight: 'bold'}}>Total Cost: $40.00</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 20,
  },
  title: {
    color: '#1782A6',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  address: {
    color: '#1782A6',
  },
  info: {
    marginBottom: 10,
  },
  diagnosis: {
    marginBottom: 10,
  },
  parts: {
    marginBottom: 10,
  },
  services: {
    marginBottom: 10,
  },
});

export default Billing;
