import React from "react";
import { View, Text,Button,StyleSheet,Image,TouchableOpacity  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

const OngoingScreen = () => {
  const navigation = useNavigation();
  const imagePaths = [require("../../assets/repairIcon.jpg")]
  const goBackHome = () => {
    navigation.navigate("Home"); 
  };
  const openPhoneDialer = () => {
    Linking.openURL(`tel:${garages.phoneNumber}`);
  };
  const opentracklocation = () => {
  
  };
  return (
    
    <View style={styles.ongoingContainer}>

      
   
        <View style={styles.detailsContainer}>
      
      <View style={styles.imageContainer}>
      {imagePaths.map((path, index) => (
      <View key={index} style={styles.rowContainer}>
        <Image source={path} style={styles.image} />
        <Text style={styles.headFont}> AMK Repair Center</Text>
      </View>
          ))}
      
        </View>
    <View style={styles.rowContainer}>
  
    <Text style={styles.label}>Repair ID: </Text>
          <Text style={styles.value}>123456</Text>
    </View>
    
    <View style={styles.rowContainer}>
          <Text style={styles.label}>License Plate No: </Text>
          <Text style={styles.value}>ABC1234</Text>
    </View>
    <View style={styles.horizontalLine}></View>
    <View style={styles.locationContainer}>
          <Ionicons name="location-sharp" size={20} color="green"/>
          <Text style={styles.value}>123,colombo</Text> 
    </View>
    <View style={styles.rowContainer}>
        
          <Ionicons name="location-sharp" size={20} color="orange"/>
          <Text style={styles.value}>456 ,Panadura</Text>
     </View>
     <View style={styles.horizontalLine}></View>
     <View style={styles.rowContainer}>
          <Text style={styles.label}>Status: </Text>
          <Text style={styles.value}>Pending</Text>
          <Text style={styles.label}>Time: </Text>
          <Text style={styles.value}>09:24 am</Text>
        </View>
        <View style={styles.actionContainer}>
        <View style={styles.contactContainer}>
          <TouchableOpacity onPress={openPhoneDialer}>
            <View style={styles.contact}>
              <Ionicons name="call-sharp" size={20} color="gray" />
              <Text style={styles.contacttext}> Call</Text>
            </View>
          </TouchableOpacity>
         
        </View>
        <View style={styles.locateContainer}>
          <TouchableOpacity onPress={opentracklocation}>
            <View style={styles.locate}>
              <Ionicons name="location-sharp" size={20} color="gray" />
              <Text style={styles.locatetext}> Track</Text>
            </View>
          </TouchableOpacity>
        </View>
  </View>
  </View>
  </View>
  );
};
const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center", 
    },

    ongoingContainer: {
      backgroundColor: "#F1EEFF",
      borderRadius: 10,
      width: "100%",
      paddingBottom:5,
      height:400,
      paddingLeft:10,
      alignItems: "flex-start", 
      flexDirection: "row",
    },
    headFont: {
      fontWeight: "bold",
      fontSize: 24,
      padding:15,
      paddingTop:30,
      color: "#125C75",

    },
    imageContainer: {
      alignItems: "center",
      paddingTop:10,
     
      
    },
    image: {
      width: 80, 
      height: 80, 
         
    },

    detailsContainer: {
    flex: 1,
    alignItems:"flex-start",
    paddingTop:10,
    paddingRight:20,
    paddingLeft:20,
   
  },
  rowContainer: {
    flexDirection: "row",
    paddingRight:10,
   // paddingLeft:-50,
    paddingTop:5,
    alignItems:"flex-start",
  },
  locationContainer: {
    flexDirection: "row",
    paddingRight:0,
   // paddingLeft:-50,
    paddingTop:5,
    alignItems:"flex-start",
  },
  label: {
    fontWeight: "bold",
    marginRight: 5,
    fontSize: 18,
    marginBottom:0,
    color:"#3F3432"
  },
  value: {
    color: "#125C75",
   // marginRight:20,
   padding:4,
  },
  horizontalLine: {
    borderBottomColor: "#3F3432",
    borderBottomWidth: 1,
    width: "100%",
    marginTop:10,
   marginBottom: 10, 
  },
  actionContainer: {
    flexDirection: "row",
   // justifyContent:,
    paddingTop: 10,
  },
  contactContainer: {
    backgroundColor: "#125C75",
    borderRadius: 5,
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginRight: 10,
  },
  contacttext: {
    color: "#FFFFFF",
  },

  contact: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  locateContainer: {
    backgroundColor: "#125C75",
    borderRadius: 5,
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingLeft:10,
    marginLeft: 10, 
  },
  locatetext: {
    color: "#FFFFFF",
  },

  locate: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  });
export default OngoingScreen;