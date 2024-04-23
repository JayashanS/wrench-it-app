import React, { useState,useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { useLogout } from "../../hooks/useLogout";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../constants/Colors";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ReservationScreen from "../Reservations/Reservation";




const [selectedImage, setSelectedImage] = [
  require("../../assets/user_profile.png"),
];
const handleImageSelect = () => {};



const windowWidth = Dimensions.get("window").width;

const ProfileScreen = () => {
  const navigation = useNavigation(); //invoke

  const [email, setEmail] = useState("");
  const [displayUrl,setDisplayUrl]=useState("");

useEffect(() => {
  const fetchEmailFromAsyncStorage = async () => {
    try {
      const userData = await AsyncStorage.getItem("user");
      if (userData) {
        const { email } = JSON.parse(userData);
        setEmail(email);
      }
    } catch (error) {
      console.error("Error fetching email from AsyncStorage:", error);
    }
  };

  fetchEmailFromAsyncStorage();
}, []);


useEffect(() => {
  const getImage = async () => {
    try {
      const photoResponse = await fetch(`http://${process.env.EXPO_PUBLIC_IP}:4000/api/photo/user/${email}.jpg`);
      if (photoResponse.ok) {
        setDisplayUrl({ uri: photoResponse.url });
      } else {
        throw new Error("Failed to retrieve uploaded photo.");
      }
    } catch (error) {
      console.error("Error uploading photo:", error);
    }
  }

  getImage();
}, [email]);
  
  
  const { logout } = useLogout();
  const handleLogout = async (e) => {
    logout();
    navigation.navigate("Login");
  };
  const handlePress = () => {
    navigation.navigate("Main");
  };
  const handleEdit = () => {
    navigation.navigate("Edit");
  };
  const handleHistory = () => {
    navigation.navigate("RepairHistory");
  };
  const handleReservation = () => {
    navigation.navigate("Reservations");
  };
  const handleContactUs = () => {
    navigation.navigate("Contact");
  };
  
  
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogout}></TouchableOpacity>

      <View style={styles.headerContainer}>
        <Text style={styles.headFont}>Wrench it</Text>

        <View>
          <TouchableOpacity onPress={handlePress}>
            <FontAwesome style={styles.iconContainer} name="remove" size={20} />
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={handleImageSelect}>
            <Image source={displayUrl} style={styles.imageContainer2} />
          </TouchableOpacity>
        </View>

        <View style={styles.customerNameCon1}>
          <Text style={styles.customerNameCon2}>K.K.S.Silva</Text>
         
        </View>
      </View>

      <View style={styles.bodyContainer}>
        <TouchableOpacity onPress={handleEdit}>
         <View style={styles.row}>
          <Feather name="edit" size={30} color="black" />
          <Text style={styles.bodyFont}>Edit</Text>
         
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleReservation}>
          <View style={styles.row}>
            <MaterialIcons name="playlist-add" size={30} color="black" />
            <Text style={styles.bodyFont}>New Reservation</Text>
          </View>
          </TouchableOpacity>
      
        <TouchableOpacity onPress={handleHistory}>
          <View style={styles.row}>
            <MaterialIcons name="history" size={30} color="black" />
            <Text style={styles.bodyFont}>History</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleContactUs}>
          <View style={styles.row}>
            <MaterialIcons name="support-agent" size={30} color="black" />
            <Text style={styles.bodyFont}>Contact Us</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogout} style={styles.row}>
          <SimpleLineIcons name="logout" size={30} color="black" />
          <Text style={styles.bodyFont}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },

  headerContainer: {
    backgroundColor: Colors.primary,
    height: 250,
    paddingTop: 20,
  },

  bodyContainer: {
    backgroundColor: Colors.onPrimary,
    width: "100%",
    paddingBottom: 5,
    height: "100%",
    paddingTop: 40,
    paddingLeft: 30,
    alignItems: "flex-start",
  },
  headFont: {
    fontSize: 24,
    padding: 20,
    color: Colors.onPrimary,
  },
  iconContainer: {
    color: Colors.onPrimary,
    marginLeft: windowWidth * 0.9,
    position: "absolute",
    marginTop: -40,
  },
  removeIconContainer: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "red",
  },

  imageContainer: {
    alignItems: "flex-start",
    //marginVertical:-20,
    position: "absolute",
    marginTop: 70,
  },
  imageContainer2: {
    marginLeft: 30,
    marginTop: 20,
    height: 130,
    width: 130,
    borderRadius: 65,
    borderWidth: 2,
    //borderColor:"black",
  },

  bodyFont: {
    fontSize: 18,
    marginLeft: 10,
    marginTop: 3,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },

  customerNameCon1: {
    marginTop: 30,
  },

  customerNameCon2: {
    //flex:1,
    //flexDirection:"row",
    marginBottom: 15,
    left: windowWidth * 0.55,
    color: Colors.onPrimary,
    fontSize: 18,
  },

  label: {
    fontWeight: "bold",
    marginRight: 1,
    fontSize: 18,
    color: "#3F3432",
  },
  value: {
    color: "#125C75",
    marginRight: 20,
  },
});

export default ProfileScreen;
