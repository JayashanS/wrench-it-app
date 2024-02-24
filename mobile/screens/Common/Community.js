import React from "react";
import { StyleSheet, View, TextInput , ImageBackground} from "react-native";
import {
  StyleSheetView,
  Text,
  Dimensions,
  
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;


export default function CommunityScreen() {
  const navigation = useNavigation();

  const handleClick = (Screen) => {
    navigation.navigate(Screen);
  };
return (
<View style={Communitystyles.CommunityApp}>
  <View style={Communitystyles.column}>
          <View style={Communitystyles.cell} > 
            <View style={Communitystyles.buttonContent}>
              <Text style={Communitystyles.buttonText}>Offers</Text>
            </View>
            <View style={Communitystyles.buttonOffer}>
              <ImageBackground
              source={require('../../assets/offerimg.jpeg')} 
              style={Communitystyles.backgroundImage}
              resizeMode="cover"
              >
              </ImageBackground>
              <TouchableOpacity style={Communitystyles.viewButton } onPress= {handleClick("OffersScreen")}>
                <Text style={Communitystyles.viewButtonText}>View </Text>
              </TouchableOpacity>
            </View>     
          </View>

          <View style={Communitystyles.cell}>
            <View style={Communitystyles.buttonContent}>
              <Text style={Communitystyles.buttonText}>Events Calender</Text>
            </View>
          </View>

          <View style={Communitystyles.cell} >
            <View style={Communitystyles.buttonContent}>
              <Text style={Communitystyles.buttonText}>Discussion Forum</Text>
            </View>
          </View>
        
  </View>
</View>
         );
        }
        
        const Communitystyles = StyleSheet.create({
          CommunityApp: {
            flex: 1,
            margin: windowWidth * 0.05,
          },
          column: {
            flex: 1,
            flexDirection: "column",
            padding: windowWidth * 0.001,
          },
          cell: {
            flex: 1,
            borderWidth: 1,
            borderColor: "#176B87",
            backgroundColor: "#d8bfd8",
            
            width: windowWidth * 0.9,
            height: windowWidth * 0.4,
            marginRight: windowWidth * 0.02,
            
            marginBottom: windowWidth * 0.05,
            /* justifyContent: "center", // Center text vertically
            alignItems: "center", // Center text horizontally */
          },
          buttonContent : {
            
            backgroundColor: "rgba(0, 0, 0, 0.5)"
          },
          buttonText : {
            marginLeft: 10,
            color: "#ffffff",
          },
          buttonOffer: {
            height: windowWidth*0.435,
            flex: 1,
          },
          backgroundImage: {
            flex: 1, 
          },
          viewButton: {
            position: 'absolute',
            bottom: 20, 
            right: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            padding: 10,
            borderRadius: 5,
          },
          viewButtonText: {
            color: '#000',
            fontWeight: 'bold',
          },

});        
        