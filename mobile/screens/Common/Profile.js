import React, { useState } from "react";
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
//import AsyncStorage from "@react-native-async-storage/async-storage";

const [selectedImage, setSelectedImage] = [
  require("../../assets/user_profile.png"),
];
const handleImageSelect = () => {};

const windowWidth = Dimensions.get("window").width;

const ProfileScreen = () => {
  const navigation = useNavigation(); //invoke
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
            <Image source={selectedImage} style={styles.imageContainer2} />
          </TouchableOpacity>
        </View>

        <View style={styles.customerNameCon1}>
          <Text style={styles.customerNameCon2}>K.K.S.Silva</Text>
          <Text style={styles.customerNameCon2}>0778149714</Text>
        </View>
      </View>

      <View style={styles.bodyContainer}>
        <TouchableOpacity onPress={handleEdit}>
         <View style={styles.row}>
          <Feather name="edit" size={30} color="black" />
          <Text style={styles.bodyFont}>Edit</Text>
         
          </View>
        </TouchableOpacity>
      
        <View style={styles.row}>
          <MaterialIcons name="playlist-add" size={30} color="black" />
          <Text style={styles.bodyFont}>Add Vehicle</Text>
        </View>

        <View style={styles.row}>
          <MaterialIcons name="history" size={30} color="black" />
          <Text style={styles.bodyFont}>History</Text>
        </View>

        <View style={styles.row}>
          <MaterialIcons name="support-agent" size={30} color="black" />
          <Text style={styles.bodyFont}>Support</Text>
        </View>

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
