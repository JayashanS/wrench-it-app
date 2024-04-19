import React, { useState, useEffect } from "react";
import { Feather } from "expo-vector-icons";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Settings,
  Alert,
} from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Linking } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const ProfileScreen = ({ route }) => {
  const navigation = useNavigation();
  const { garages } = route.params || {};
  

  const [mapRegion, setMapRegion] = useState(null);
  let garageId = garages.garageId;
  let centerName = garages.repairCenterName;
  let location = `${garages.address.street}, ${garages.address.city}`;
  console.log("Garages object:", garages);

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
    Linking.openURL(`tel:${garages.phoneNumber}`);
  };
  const requestAssistance = () => {
    navigation.navigate("NewRequest", { garageId, centerName });
  };
  useEffect(() => {
    // Extract the location details from the garage object
    const { street, city, state } = garages;

    // Formulate the address string
    const address = `${street}, ${city}, ${state}`;

    // Use geocoding to get the coordinates of the address
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address
      )}&key=eyJ1IjoiaGltYW50aGExMTY4MSIsImEiOiJjbHF2Ync3YWg0d2hwMmtvNGViN3dhZW1oIn0.YItSBzk4Ndt4e8gOTzHKyw`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          setMapRegion({
            latitude: lat,
            longitude: lng,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          });
        }
      })
      .catch((error) => console.error("Error fetching location:", error));
  }, [garages]);

  const services = [
    "Suspension Repairs",
    "Transmission Issues",
    "Electrical",
    "Electronic",
    "Body Repairs & Painting",
    "Breakdown Repair and Services",
    "Engine",
    "Scanning",
    "HV System",
    "Brake Services and Maintenance",
  ];

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
            <Text>{garages.repairCenterName}</Text>
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
              <Text style={styles.contacttext}> Call</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.TimeContainer}>
          <View style={styles.Time}>
            <Ionicons name="time" size={20} color="gray" />
            <View>
              <Text style={styles.headFont}> Opening Hours </Text>
              <Text>
                {" "}
                {garages.openingHours} - {garages.closingHours}
              </Text>
            </View>
          </View>
          <View style={styles.Settings}>
            <Ionicons name="settings" size={20} color="gray" />
            <Text style={styles.headFont}> Breakdown Service </Text>
          </View>
          <Text style={styles.hours}>
            {" "}
            24/7 Service - {garages.allDayService ? "Yes" : "No"}
          </Text>
        </View>

        <View style={styles.locationContainer}>
          <View style={styles.location}>
            <Ionicons name="location" size={20} color="gray" />
            <Text style={styles.headFont}> location</Text>
          </View>
          <Text>
            {" "}
            {garages.street},{garages.city},{garages.state}
          </Text>

          <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.mapContainer}>
              {/* Display MapView only if mapRegion is available */}
              {mapRegion && (
                <MapView
                  style={styles.map}
                  provider={PROVIDER_GOOGLE}
                  showsUserLocation={true}
                  region={mapRegion}
                >
                  <Marker coordinate={mapRegion} />
                </MapView>
              )}
            </View>
          </SafeAreaView>
        </View>

        <View style={styles.priceContainer}>
          <View style={styles.Price}>
            <Ionicons name="pricetag" size={20} color="gray" />
            <Text style={styles.headFont}> Price Range</Text>
          </View>

          <Text style={styles.PricechargeHeader}>
            {" "}
            Roadside assistant charges{" "}
          </Text>
          <Text style={styles.Pricecharge}>
            {" "}
            Min Charge (1 km - 10 km ){" "}
            <Ionicons name="arrow-forward-circle" size={17} color="gray" />{" "}
            {garages.minCharge}{" "}
          </Text>
          <Text style={styles.Pricecharge}>
            {" "}
            Max Charge (15 km - 20 km ){" "}
            <Ionicons name="arrow-forward-circle" size={17} color="gray" />{" "}
            {garages.maxCharge}
          </Text>
        </View>

        <View style={styles.serviceContainer}>
          <View style={styles.Service}>
            <Ionicons name="list" size={22} color="gray" />
            <Text style={styles.headFont}> Our Services</Text>
          </View>

          {services &&
            services.map((service, index) => (
              <View key={index}>
                <View style={styles.Mark}>
                  {garages.services && garages.services[service] ? (
                    <Ionicons name="checkmark-circle" size={20} color="green" />
                  ) : (
                    <Ionicons name="close-circle" size={20} color="red" />
                  )}
                  <Text style={styles.serviceList}> {service}</Text>
                </View>
              </View>
            ))}
        </View>

        <View style={styles.requestButtonContainer}>
          <View style={styles.request}>
            <Ionicons name="car" size={22} color="gray" />
            <Text style={styles.ForYouFont}> We Are Here For You</Text>
          </View>
          <TouchableOpacity
            onPress={() => requestAssistance()}
            style={styles.requestButton}
          >
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2c3e50",
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
  contacttext: {
    color: "#FFFFFF",
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
    paddingBottom: 5,
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
    color: "#125C75",
  },
  Settings: {
    padding: 5,
    marginLeft: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  Mark: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  serviceList: {
    alignItems: "left",
    fontWeight: "bold",
    fontSize: 17,
    color: "#3F3432",
    marginLeft: 20,
  },
  ForYouFont: {
    fontWeight: "bold",
    fontSize: 20,
    alignContent: "center",
    color: "#F79191",
  },
  hours: {
    fontWeight: "bold",
    fontSize: 18,
    alignContent: "center",
    color: "#F79191",
  },
  locationContainer: {
    backgroundColor: "#F1EEFF",
    borderRadius: 6,
    marginVertical: -10,
    padding: 0,
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
    padding: 8,
    borderRadius: 0,
    borderColor: "gray",
    justifyContent: "center",
    paddingLeft: 30,
  },

  priceContainer: {
    backgroundColor: "#F1EEFF",
    borderRadius: 6,
    marginVertical: 20,
    paddingBottom: 5,
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
    paddingBottom: 20,
    width: "100%",
    alignSelf: "center",
  },

  Service: {
    padding: 8,
    marginLeft: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  serviceList: {
    paddingTop: 5,
    fontWeight: "bold",
    fontSize: 17,
    alignContent: "center",
    color: "#3F3432",
    paddingLeft: 60,
  },
  PricechargeHeader: {
    fontWeight: "bold",
    fontSize: 18,
    alignContent: "center",
    color: "#000000",
  },
  Pricecharge: {
    paddingTop: 8,
    fontWeight: "bold",
    fontSize: 17,
    alignContent: "center",
    color: "#3F3432",
    paddingLeft: 20,
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
    width: 300,
    alignSelf: "center",
    marginVertical: 10,
    paddingTop: 10,
  },
  requestButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: -10,
    marginBottom: 5,
  },
});

export default ProfileScreen;
