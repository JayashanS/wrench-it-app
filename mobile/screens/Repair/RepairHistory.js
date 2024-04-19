import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const RepairHistory = () => {
  const historyData = [
    {
      id: 1,
      name: 'Review Auto Care',
      address: 'No.65, Galle Road, Colombo',
      vehicle: 'AB12365',
      date: '20/04/2024',
      fault: 'Intermittent engine misfire during acceleration'
    },
  ];

  return (
    <ScrollView>  
      <View style={styles.container}>
        <Text style={styles.header}>
          <Text style={styles.text}>Repair History</Text>
        </Text>

        {historyData.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.address}>{item.address}</Text>
            <Text style={styles.vehicle}>Vehicle: {item.vehicle}</Text>
            <Text style={styles.date}>Started On {item.date}</Text>
            <Text style={styles.fault}>Fault: {item.fault}</Text>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Billing</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0'
  },
  
  header: {
    marginBottom: 10,
    width: 380,
    height: 40,
    marginVertical: 0,
    color: '#FFFFFF',
    backgroundColor: '#125C75'
  },

  text:{
    fontSize: 24,
    fontWeight: 'bold',
    justifyContent:'center'
  },

  card: {
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 15,
    borderRadius: 5
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  address: {
    color: 'grey'
  },

  vehicle: {
    marginTop: 5
  },

  date: {
    marginTop: 5
  },

  fault: {
    marginTop: 5
  },

  button: {
    marginTop: 10,
    backgroundColor: '#00f',
    paddingVertical: 10,
    borderRadius: 5
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default RepairHistory;
