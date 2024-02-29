import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useLogout } from "../../hooks/useLogout";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../constants/Colors";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';

const windowWidth = Dimensions.get("window").width;

const ProfileScreen = () => {
  const navigation = useNavigation(); //invoke
  const { logout } = useLogout();
  const handleLogout = async (e) => {
    logout();
    navigation.navigate("Login");
  };
  const handlePress=()=>{
      navigation.navigate("Main")
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogout}> 
      </TouchableOpacity>


      
      <View style={styles.headerContainer}>
        <Text style={styles.headFont}>Wrench it</Text>

        <TouchableOpacity onPress={handlePress}>
          <FontAwesome style={styles.iconContainer} name="remove" size={24}  />
        </TouchableOpacity>
        <View >
         
        </View>
      </View>
      <View>
        <Text style={styles.bodyContainer}>ssss</Text>
      </View>

    </View>

    


  );
};

const styles = StyleSheet.create({
  container: {
      flex:1,
      flexDirection:"column",
      width:"100%",
      
    },

    headerContainer:{
      backgroundColor: Colors.primary,
      height:250,
      paddingTop:20,
      
    },

    bodyContainer: {
      backgroundColor: Colors.onPrimary,
      width: "100%",
      paddingBottom:5,
      height:"100%",
      paddingLeft:10,
      alignItems: "flex-start", 
      flexDirection: "row",
    },
    headFont: {
      
      fontSize: 20,
      padding:20,
      color: Colors.onPrimary,

    },
    iconContainer:{
      color:Colors.onPrimary,
      marginLeft:windowWidth*0.9,
      position:"absolute",
      marginTop:-40,
    },
    imageContainer: {
      alignItems: "center",
      paddingTop:40,
      paddingRight: 0,
      
    },
    image: {
      width: 100, 
      height: 100, 
         
    },

  label: {
    fontWeight: "bold",
    marginRight: 1,
    fontSize: 18,
    color:"#3F3432"
  },
  value: {
    color: "#125C75",
    marginRight:20,
  },
  });

export default ProfileScreen;
