import React, { useState } from "react";
import { View, Text, StyleSheet, Button, KeyboardAvoidingView,Platform} from "react-native";
import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from "expo-location";
import {
    ScrollView,
    TextInput,
    TouchableOpacity,
  } from "react-native-gesture-handler";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";


const Assistance = () => {
  const [location, setLocation] = useState(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const fetchLocation = async () => {
    try {
      const { status } = await requestForegroundPermissionsAsync();

      if (status === "granted") {
        const { coords } = await getCurrentPositionAsync();
        console.log("Location obtained:", coords);
        setLocation(coords); // Update the state with the received location
      } else {
        console.warn("Location permission denied");
      }
    } catch (error) {
      console.error("Error getting location:", error.message);
    }
  };

  const [vehicleNumber, setVehicleNumber] = useState("")
  const [fault, setFault] = useState("")
  const navigation = useNavigation();
  const submit= () => {
    navigation.navigate("RequestSuccess");
  };

  return (
<KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -200} // Adjust this value based on your UI
    >

<ScrollView>
    <View style={styles.container}>


<View style={styles.vehicleContainer}>
          <View style={styles.vehicle}>
         
            <Text style={styles.headFont}>Your Vehicle</Text>
            <TextInput
            style={styles.vehicleInput}
            placeholder="Enter Vehicle Number"
            value={vehicleNumber}
            onChangeText={(text) => setVehicleNumber(text)}
          />
          </View>

          <Text style={styles.hours}></Text>
        </View>


        <View style={styles.whatHappened}>
          <View style={styles.happened}>
         
            <Text style={styles.headFont}>What Happened</Text>
            <TextInput
            style={styles.happenInput}
            placeholder="Briefly Describe"
            value={fault}
            onChangeText={(text) => setFault(text)}
          />
          </View>

          <Text style={styles.hours}></Text>
        </View>

         <View style={styles.mapContainer}>
            <MapView
              style={{ flex: 1 }}
              provider={PROVIDER_GOOGLE}
              showsUserLocation={true}
              region={mapRegion}
            />
            <Marker coordinate={mapRegion} />
          </View>

       <View View style={styles.recievedLocationContainer}>
      <Text style={styles.recievedLocation}>
        Received Location:{" "}
        {location ? `Latitude: ${location.latitude}, Longitude: ${location.longitude}` : "No location received"}
      </Text>
      
      <TouchableOpacity onPress={() => fetchLocation()}style={styles.getLocationButton}>
      <Text style={styles.locationButtonText}>Get Your Location</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => submit()}style={styles.submitButton}>
      <Text style={styles.locationButtonText}>Submit Request</Text>
      </TouchableOpacity>
      
    </View>

    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
    container: {
      marginTop: 50,
    },
    recievedLocation: {
      color: "#2c3e50",
      fontWeight: "bold",
      fontSize: 20,
    },
    recievedLocationContainer: {
        backgroundColor: "#F1EEFF",
        borderRadius: 6,
        marginVertical: -10,
        padding:40,
        width: "100%",
        height:"auto",
        alignSelf: "center",
      },
    mapContainer: {
        marginVertical: 20,
        width: 400,
        height: 300,
        padding:8,
        borderRadius:0,
        borderColor: "gray",
        justifyContent: "center",
        paddingLeft:30
      },
      getLocationButton: {
        backgroundColor: "#125C75",
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 20,
        width:300,
        alignSelf: "center",
        marginVertical: 10,
        paddingTop:10
      },
      locationButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        padding:-10,
        marginBottom:5,
      },
      vehicleContainer: {
        backgroundColor: "#F1EEFF",
        borderRadius: 10,
        marginVertical: 1,
        paddingBottom:6,
        paddingTop:1,
        width: "100%",
        alignSelf: "center",
      },
      vehicle: {
        padding: 5,
        marginLeft: 5,
        flexDirection: "row",
        alignItems: "center",
      },
      headFont: {
        fontWeight: "bold",
        fontSize: 20,
        alignContent: "center",
        padding:10,
      
        color: "#2c3e50",
      },
      vehicleInput: {
        height: 40,
        borderColor:'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        width:200,
        paddingHorizontal: 10,
      },
      whatHappened: {
        backgroundColor: "#F1EEFF",
        borderRadius: 10,
        marginVertical: 1,
        paddingBottom:1,
        width: "100%",
        alignSelf: "center",
      },
      happenInput: {
        height: 40,
        borderColor:'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft:10,
        width:400,
        paddingHorizontal: 10,
      },
      happened: {
        padding: 5,
        marginLeft: 5,
        flexDirection: "column",
        alignItems: "flex-start",
      },
      submitButton: {
        backgroundColor: "#125C75",
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 20,
        width:300,
        alignSelf: "center",
        marginVertical: 10,
        paddingTop:10
      },

  });
  
export default Assistance;