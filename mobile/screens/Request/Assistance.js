import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, KeyboardAvoidingView,Platform} from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";
import { getCurrentPositionAsync, requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from "expo-location";
import {ScrollView,TextInput,TouchableOpacity} from "react-native-gesture-handler";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import MapboxGLLocationManager from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken("pk.eyJ1IjoiaGltYW50aGExMTY4MSIsImEiOiJjbHF2Ync3YWg0d2hwMmtvNGViN3dhZW1oIn0.YItSBzk4Ndt4e8gOTzHKyw");

const Assistance = () => {
  const [location, setLocation] = useState(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [vehicleNumber, setVehicleNumber] = useState("")
  const [fault, setFault] = useState("");
  const [mapReady, setMapReady] = useState(false);
  const navigation = useNavigation();
  
  useEffect(() => {
    fetchLocation();
    const locationSubscription = watchPosition();
    return () => locationSubscription.remove();
  }, [fetchLocation]);

  const fetchLocation = async () => {
    try {
      const { status } = await requestForegroundPermissionsAsync();

      if (status === "granted") {
        const { coords } = await getCurrentPositionAsync();
        console.log("Location obtained:", coords);
        setLocation(coords);
        setMapRegion({ ...mapRegion, latitude: coords.latitude, longitude: coords.longitude });
      } else {
        console.warn("Location permission denied");
      }
    } catch (error) {
      console.error("Error getting location:", error.message);
    }
  };
  const watchPosition = async () => {
    try {
      const locationSubscription = await watchPositionAsync(
        {
          accuracy: Accuracy.High,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (newLocation) => {
          console.log("New location:", newLocation.coords);
          setLocation(newLocation.coords);
          setMapRegion({ ...mapRegion, latitude: newLocation.coords.latitude, longitude: newLocation.coords.longitude });
        }
      );
      return locationSubscription;
    } catch (error) {
      console.error("Error watching location:", error.message);
    }
  };

  const submit= () => {
    navigation.navigate("RequestSuccess");
  };
  const onMapReady = () => {
    setMapReady(true); // Set map ready state to true when Mapbox is ready
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

        {mapReady && ( // Render Mapbox component when Mapbox is ready
            <View style={styles.mapContainer}>
              <MapboxGL.MapView
                style={styles.map}
                onDidFinishRenderingMapFully={onMapReady} // Call onMapReady when Mapbox is fully rendered
                styleURL={MapboxGL.StyleURL.Outdoors}
              >
                <MapboxGL.UserLocation />
                {location && (
                  <MapboxGL.PointAnnotation
                    key="userLocation"
                    id="userLocation"
                    coordinate={[location.longitude, location.latitude]}
                  >
                    <View style={styles.annotationContainer}>
                      <View style={styles.annotationFill} />
                    </View>
                    <MapboxGL.Callout title="Your Location" />
                  </MapboxGL.PointAnnotation>
                )}
              </MapboxGL.MapView>
            </View>
          )}
       <View style={styles.recievedLocationContainer}>
            <Text style={styles.recievedLocation}>
              Received Location:{" "}
              {location ? `Latitude: ${location.latitude}, Longitude: ${location.longitude}` : "No location received"}
            </Text>

      <TouchableOpacity onPress={fetchLocation} style={styles.getLocationButton}>
      <Text style={styles.locationButtonText}>Get Your Location</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={submit} style={styles.submitButton}>
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