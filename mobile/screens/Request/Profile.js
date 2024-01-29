import React, { useState, useEffect } from "react";
import { Feather } from "expo-vector-icons";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Linking } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const imagePaths = [require("../../assets/profileImage3.jpg")];
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const openPhoneDialer = () => {
    Linking.openURL("tel:0768030344");
  };
  const requestAssistance= () => {
    navigation.navigate("Assistance");
  };

  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const services = ["Suspension Repairs", "Transmission Issues", "Electrical", "Electronic",
   "Body Repairs & Painting", "Breakdown Repair and Services", "Engine", "Scanning", "HV System","Brake Services and Maintenance"];
  
   return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.appBarWrapper}>
          <View style={styles.appBar}>
            <Text style={styles.welcome}>True care in Autocare</Text>
          </View>
        </View>

        <View style={styles.searchContainer}>
          <TouchableOpacity>
            <Feather name="search" size={20} style={styles.searchIcon} />
          </TouchableOpacity>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value=""
              onPressIn={() => {}}
              placeholder="What are you looking for"
            />
          </View>
        </View>

        <View style={styles.imageContainer}>
          {imagePaths.map((path, index) => (
            <Image key={index} source={path} style={styles.image} />
          ))}
        </View>

        <View style={styles.details}>
          <View style={styles.titleRow}>
            <Text style={styles.headFont}>ABC Repair Center</Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons key={index} name="star" size={20} color="gold" />
            ))}
            <Text style={styles.ratingText}> (4.9)</Text>
          </View>

          <View style={styles.rating}>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons name="plus" size={24} />
            </TouchableOpacity>
            <Text style={styles.ratingText}> {count} </Text>
            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons name="minus" size={24} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.contactContainer}>
          <TouchableOpacity onPress={openPhoneDialer}>
            <View style={styles.contact}>
              <Ionicons name="call" size={20} color="gray" />
              <Text  style={styles.contacttext}>  Call</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.TimeContainer}>
          <View style={styles.Time}>
            <Ionicons name="time" size={20} color="gray" />
            <Text style={styles.headFont}> Opening Hours</Text>
          </View>

          <Text style={styles.hours}>           24/7 Service</Text>
        </View>

        <View style={styles.locationContainer}>
          <View style={styles.location}>
            <Ionicons name="location" size={20} color="gray" />
            <Text style={styles.headFont}> location</Text>
          </View>

          <Text>         No.02, Dharmapala place, Rajagiriya</Text>
          <View style={styles.mapContainer}>
            <MapView
              style={{ flex: 1 }}
              provider={PROVIDER_GOOGLE}
              showsUserLocation={true}
              region={mapRegion}
            />
            <Marker coordinate={mapRegion} />
          </View>
        </View>

        <View style={styles.priceContainer}>
          <View style={styles.Price}>
            <Ionicons name="pricetag" size={20} color="gray" />
            <Text style={styles.headFont}> Price Range</Text>
          </View>

          <Text style={styles.PricechargeHeader}>          Roadside assistant charges </Text>
          <Text style={styles.Pricecharge}>          1 km -  10 km   <Ionicons name="arrow-forward-circle" size={17} color="gray" /> Rs.3000 </Text>
          <Text style={styles.Pricecharge}>          10 km - 15 km  <Ionicons name="arrow-forward-circle" size={17} color="gray" /> Rs.3500</Text>
          <Text style={styles.Pricecharge}>          15 km - 20 km  <Ionicons name="arrow-forward-circle" size={17} color="gray" /> Rs.4000</Text>
        </View>

        <View style={styles.serviceContainer}>
          <View style={styles.Service}>
            <Ionicons name="list" size={22} color="gray" />
            <Text style={styles.headFont}> Services</Text>
          </View>

          {services.map((service, index) => (
            <Text key={index} style={styles.serviceList}>
              {service}
            </Text>
          ))}
        </View>

        <View style={styles.requestButtonContainer}>
          
            <View style={styles.request}>
              <Ionicons name="car" size={22} color="gray" />
              <Text style={styles.headFont}> We Are Here For You</Text>
             
            </View>
            <TouchableOpacity onPress={() => requestAssistance()} style={styles.requestButton}>
                <Text style={styles.requestButtonText}>Request Assistance</Text>
              </TouchableOpacity>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appBarWrapper: {
    marginHorizontal: 22,
    marginTop: 10,
  },

  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  welcome: {
    fontWeight: "bold",
    fontSize: 30,
    alignContent: "center",
    color: "#2c3e50",
    marginTop: 10,
  },

  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#D1D0CF",
    borderRadius: 5,
    marginVertical: 10,
    height: 30,
    width: 350,
    alignSelf: "center",
  },
  searchIcon: {
    marginHorizontal: 10,
    color: "gray",
    marginTop: 5,
  },

  searchWrapper: {
    flex: 1,
    backgroundColor: "#D1D0CF",
    marginRight: 5,
    borderRadius: 5,
  },

  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 5,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    aspectRatio: 2,
    resizeMode: "cover",
    borderRadius: 15,
    marginVertical: 15,
  },
  details: {
    marginTop: 0,
    backgroundColor: "lightWhite",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  titleRow: {
    marginHorizontal: 20,
    paddingBottom: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: 10,
  },

  
  
  ratingRow: {
    paddingBottom: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: 5,
  },
  rating: {
    top: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: 10,
  },
  contactContainer: {
    backgroundColor: "#125C75",
    borderRadius: 5,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "center",
    bottom: -10,
   
   
  },
  contacttext:{
    color:"#FFFFFF"
  },

  contact: {
    padding: 5,
    marginLeft: 5,
    flexDirection: "row",
    alignItems: "center",
   
  },
  TimeContainer: {
    backgroundColor: "#F1EEFF",
    borderRadius: 10,
    marginVertical: 20,
    paddingBottom:5,
    width: "100%",
    alignSelf: "center",
  },
  Time: {
    padding: 5,
    marginLeft: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  headFont: {
    fontWeight: "bold",
    fontSize: 20,
    alignContent: "center",
    color: "#2c3e50",
  },

  hours:{
    fontWeight: "bold",
    fontSize: 18,
    alignContent: "center",
    color: "#FF0202",
  },
  locationContainer: {
    backgroundColor: "#F1EEFF",
    borderRadius: 6,
    marginVertical: -10,
    padding:0,
    width: "100%",
    alignSelf: "center",
  },
  location: {
    padding: 8,
    marginLeft: 5,
    flexDirection: "row",
    alignItems: "center",
  },
 mapContainer: {
    marginVertical: 0,
    width: 400,
    height: 200,
    padding:8,
    borderRadius:0,
    borderColor: "gray",
    justifyContent: "center",
    paddingLeft:30
  },

  priceContainer: {
    backgroundColor: "#F1EEFF",
    borderRadius: 6,
    marginVertical: 20,
    paddingBottom:5,
    width: "100%",
    alignSelf: "center",
  },

  Price: {
    padding: 8,
    marginLeft: 5,
    flexDirection: "row",
    alignItems: "center",
  },

  serviceContainer: {
    backgroundColor: "#F1EEFF",
    borderRadius: 6,
    marginVertical: -10,
    paddingBottom:20,
    width: "100%",
    alignSelf: "center",
  },
  
  Service: {
    padding: 8,
    marginLeft: 5,
    flexDirection: "row",
    alignItems: "center",
  },
serviceList:{
    
    paddingTop:5,
    fontWeight: "bold",
    fontSize: 17,
    alignContent: "center",
    color: "#3F3432",
    paddingLeft:45,
},
PricechargeHeader:{
  fontWeight: "bold",
  fontSize: 18,
  alignContent: "center",
  color: "#000000",
},
Pricecharge:{
  paddingTop:8,
  fontWeight: "bold",
  fontSize: 17,
  alignContent: "center",
  color: "#3F3432",
  paddingLeft:20,
},

requestButtonContainer: {
  backgroundColor: "#F1EEFF",
  borderRadius: 6,
  marginVertical: -10,
  paddingBottom: 20,
  width: "100%",
  alignSelf: "center",
},
request: {
  padding: 20,
  marginLeft: -5,
  flexDirection: "row",
  alignItems: "center",
},
requestButton: {
  backgroundColor: "#125C75",
  borderRadius: 8,
  paddingVertical: 5,
  paddingHorizontal: 20,
  width:300,
  alignSelf: "center",
  marginVertical: 10,
  paddingTop:10
},
requestButtonText: {
  color: "#fff",
  fontSize: 18,
  fontWeight: "bold",
  textAlign: "center",
  padding:-10,
  marginBottom:5,
},

});

export default ProfileScreen;
