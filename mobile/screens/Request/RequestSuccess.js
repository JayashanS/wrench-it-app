import React , { useState } from "react";
import { View, Text,StyleSheet,Button} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";


const RequestSuccess = () => {

    const navigation = useNavigation();

const okclicked= () => {
   // From the component where you want to navigate to 'OngoingScreen' within a nested navigator
   navigation.navigate("Main", { screen: "OngoingScreen", params: { index: 'second'} });
  };


  return (
    <View style={styles.container}>
    <View style={styles.TimeContainer}>
    <View style={styles.Time}>
      
      <Text style={styles.headFont}>Request Has Been Sent Successfully</Text>
    </View>

    <TouchableOpacity onPress={() => okclicked()}style={styles.okButton}>
      <Text style={styles.okButtonText}>Ok</Text>
      </TouchableOpacity>
  </View>
  </View>
  );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center", 
      },

    TimeContainer: {
        backgroundColor: "#F1EEFF",
        borderRadius: 10,
        width: "90%",
        paddingBottom:5,
        height:150,
        justifyContent: "center", // Center vertically
        alignItems: "center", // Center horizontally
     
      },
      headFont: {
        fontWeight: "bold",
        fontSize: 18,
        alignContent: "center",
        padding:10,
        color: "#125C75",

      },
      okButton: {
        backgroundColor: "#125C75",
        borderRadius: 8,
        width:90,
        alignSelf: "center",
        marginVertical: 10,
        paddingTop:5,
        justifyContent: "center", // Center vertically
        alignItems: "center", 
      },
      okButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        padding:-10,
        marginBottom:5,
      },

});
export default RequestSuccess;
