import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';

const RepairHistory = () => {
  const navigation = useNavigation();

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

  const goToBilling = () => {
    navigation.navigate('Billing'); 
  };

  return (
    <ScrollView>  
      <View style={styles.container}>

        {repairData.map((item) => (
          <View key={item._id} style={styles.card}>
            <Text style={styles.title}>{item.garageDetails[0].repairCenterName}</Text>
            <Text style={styles.address}>{item.combinedAddress}</Text>
            <Text style={styles.vehicle}>Vehicle: {item.model}</Text>
            <Text style={styles.date}>Started On {new Date(item.date).toLocaleDateString()}</Text>
            <Text style={styles.fault}>Fault: {item.fault}</Text>

            <TouchableOpacity style={styles.button} onPress={goToBilling}>
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

  text:{
    fontSize: 24,
    fontWeight: 'bold',
    justifyContent:'center'
  },

  card: {
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 15,
    borderRadius: 10
    },

  title: {
    color: '#1782A6',
    fontSize: 18,
    fontWeight: 'bold'
  },

  address: {
    color: '#1782A6',
  },

  vehicle: {
    color: 'gray',
    marginTop: 5
  },

  date: {
    marginTop: 5
  },

  fault: {
    marginTop: 5,
    fontWeight: 'bold'
  },

  button: {
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 5
  },

  buttonText: {
    color: '#1782A6',
    textAlign: 'right',
    fontWeight: 'bold'
  }
});

export default RepairHistory;
