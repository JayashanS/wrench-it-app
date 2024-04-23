import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from "@react-native-async-storage/async-storage";

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

  const [email, setEmail] = useState("");
  const [repairData, setRepairData] = useState([]);

  useEffect(() => {
    const fetchEmailFromAsyncStorage = async () => {
      try {
        const userData = await AsyncStorage.getItem("user");
        if (userData) {
          const { email } = JSON.parse(userData);
          setEmail(email);
          fetchRepairs(email);
        }
      } catch (error) {
        console.error("Error fetching email from AsyncStorage:", error);
      }
    };

    fetchEmailFromAsyncStorage();
  }, []);

  useEffect(() => {
    fetchRepairs(email);

  }, [email]);

  const fetchRepairs = async (userEmail) => {
    try {
      const response = await fetch(
        `http://${process.env.EXPO_PUBLIC_IP}:4000/api/request/user/${userEmail}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch repairs");
      }
      const data = await response.json();
      setRepairData(data);
    } catch (error) {
      console.error("Error fetching repairs:", error);
    }
  };




  return (
    <ScrollView>  
      <View style={styles.container}>
        <Text style={styles.header}>
          <Icon name = "chevron-left" size = {24} color = {"white"}></Icon>
          <Text style={styles.text}>Repair History</Text>
        </Text>

        {repairData.map((item) => (
          <View key={item._id} style={styles.card}>
            <Text style={styles.title}>{item.garageDetails[0].repairCenterName}</Text>
            <Text style={styles.address}>{item.combinedAddress}</Text>
            <Text style={styles.vehicle}>Vehicle: {item.model}</Text>
            <Text style={styles.date}>Started On {new Date(item.date).toLocaleDateString()}</Text>
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
