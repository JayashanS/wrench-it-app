import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import {
  StyleSheetView,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;


export default function HomeScreen() {
return (
<View style={homestyles.homeApp}>
  <View style={homestyles.row}>
          <TouchableOpacity style={homestyles.cell} >
            <Icon />
            <View style={homestyles.buttonContent}>
              <Ionicons name="search" size={80} color="#125C75" />
              <Text style={homestyles.buttonText}>Find Garages</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={homestyles.cell}>
            <View style={homestyles.buttonContent}>
              <Ionicons
                name="person"
                size={80}
                color="#125C75"
                marginBottom={10}
              />
              <Text style={homestyles.buttonText}>Profile</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={homestyles.cell} >
            <View style={homestyles.buttonContent}>
              <Ionicons name="call" size={80} color="#125C75" marginBottom={10} />
              <Text style={homestyles.buttonText}>Calls</Text>
            </View>
          </TouchableOpacity>
        
        </View>
        </View>
         );
        }
        
        const homestyles = StyleSheet.create({
          homeApp: {
            flex: 1,
            flexDirection: "column",
            margin: windowWidth * 0.1,
          },
          row: {
            flex: 1,
            flexDirection: "row",
            marginBottom: windowWidth * 0.05,
            paddingLeft: windowWidth * 0.02,
          },
          cell: {
            flex: 1,
            //borderWidth: 1,
            //borderColor: "#176B87",
            backgroundColor: "#D9D9D9",
            borderRadius: 5,
            height: windowWidth * 0.4,
            marginRight: windowWidth * 0.02,
            padding: windowWidth * 0.02,
          },
          
});
