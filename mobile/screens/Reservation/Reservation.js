import React from "react";
import { View, Text,Button,StyleSheet,Image ,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

const Reservation = () => {
  const navigation = useNavigation();

  const imagePaths = [require("../../assets/repairIcon.jpg")]

  const viewProfile = () => {
    navigation.navigate("Profile"); 
  };
  
  return (
    
    <View style={styles.ongoingContainer}>

       <View style={styles.imageContainer}>
          {imagePaths.map((path, index) => (
            <Image key={index} source={path} style={styles.image} />
          ))}
        </View>
            
            
        <View style={styles.contentContainer}>
        <Text style={styles.headFont}> AMK Repair Center</Text>

        

        
          
          <View style={styles.view}>
            <TouchableOpacity onPress={() => viewProfile()} style={styles.viewButton}>
              <Text style={styles.viewButtonText}>View Profile</Text>
            </TouchableOpacity>
         
        </View>
        <View style={styles.details}>
        <Text> Roadside assistant charges </Text>
          <Text>1 km -  10 km   <Ionicons name="arrow-forward-circle" size={17} color="gray" /> Rs.3000 </Text>
          <Text>10 km - 15 km  <Ionicons name="arrow-forward-circle" size={17} color="gray" /> Rs.3500</Text>
          <Text>15 km - 20 km  <Ionicons name="arrow-forward-circle" size={17} color="gray" /> Rs.4000</Text>
          </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  ongoingContainer: {
    backgroundColor: "#F1EEFF",
    borderRadius: 10,
    width: "100%",
    paddingBottom: 5,
    height: 250,
    paddingLeft: 5,
    flexDirection: "row",
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },
  headFont: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 10,
    color: "#125C75",

  },
  imageContainer: {
    alignItems: "center",
    paddingTop: 40,
    paddingRight:50,
  },
  image: {
    width: 100,
    height: 100,
  },
 
  request: {
    padding: 1,
    flexDirection: "column",
    
  },
  view: {
    marginRight: 200,
    flexDirection: "column",
    alignItems: "flex-start",
    
  },
  requestButton: {
    backgroundColor: "#125C75",
    borderRadius: 5,
    width: 220,
    alignSelf: "flex-start",
    marginVertical: 10,
  },
  viewButton: {
    backgroundColor: "#125C75",
    borderRadius: 5,
    width: 220,
    alignSelf: "flex-start",
    marginVertical: 10,
  },
  requestButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: -10,
    marginBottom: 5,
  },
  viewButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: -10,
    marginBottom: 5,
  },
  details: {
    padding: 8,
    marginLeft: 5,
    marginRight:10,
    flexDirection:"column",
    alignItems:"flex-start",
  },
});
export default Reservation;