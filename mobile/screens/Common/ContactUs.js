import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Image,
    SafeAreaView,
    TextInput
  } from "react-native";
import React, { useState }  from 'react'
import Colors from "../../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";



  
const windowWidth = Dimensions.get('window').width;

const ContactUs=()=>{
   
    const navigation = useNavigation(); 
    const handlePress = () => {
        navigation.navigate("Profile");
      };
    return(
        <SafeAreaView style={styles.container}>
            
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={handlePress}>
                    <MaterialIcons  name="keyboard-arrow-left" size={36} color={Colors.text}/>
                </TouchableOpacity>
                <Text style={{fontSize:22,paddingLeft:50}}>Contact Details</Text> 
             </View>   

             <View style={styles.bodyContainer}>
                <View style={styles.contactContainer}>
                    <View style={styles.detailContainer}>
                        <Text style={{fontSize:18}}>S.A.H.J.SERAPPERUMA  </Text>
                        <Text style={{fontSize:16}}>jayashanhimantha@gmail.com </Text>
                        <Text style={{fontSize:16}}>+94(71) 1849448  </Text>
                    </View>    
                </View>
                <View style={styles.contactContainer}>
                    <View style={styles.detailContainer}>
                        <Text style={{fontSize:18}}>K.K.S.SILVA  </Text>
                        <Text style={{fontSize:16}}>kavishkasandaruwan03@gmail.com </Text>
                        <Text style={{fontSize:16}}>+94(77) 8149714  </Text>
                    </View>
                </View>
                <View style={styles.contactContainer}>
                    <View style={styles.detailContainer}>
                        <Text style={{fontSize:18}}>I.L.S.KARUNARATHNA </Text>
                        <Text style={{fontSize:16}}>imalsha.karunarathna07@gmail.com </Text>
                        <Text style={{fontSize:16}}>+94(76) 8030344  </Text>
                    </View>
                </View>
                <View style={styles.contactContainer}>
                    <View style={styles.detailContainer}>
                        <Text style={{fontSize:18}}>M.N.M SAJADH  </Text>
                        <Text style={{fontSize:16}}>sajathahamedab33@gmail.com </Text>
                        <Text style={{fontSize:16}}>+94(76) 6943163 </Text>
                    </View>
                </View>
                <View style={styles.contactContainer}>
                    <View style={styles.detailContainer}>
                        <Text style={{fontSize:18}}>A.M.P.M. ADHIKARAM   </Text>
                        <Text style={{fontSize:16}}>pramodmadhushan03@gmail.com </Text>
                        <Text style={{fontSize:16}}>+94(71) 7016493  </Text>
                    </View>
                </View>
                

             </View>

        </SafeAreaView>
    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1, 
        backgroundColor:Colors.background,
        paddingHorizontal:22
      },
      headerContainer: {
    
        flexDirection:"row",
        margin:10,
        paddingTop: 50,
        fontSize:22, 
    
       
      },
       bodyContainer: {
        
        backgroundColor: Colors.onPrimary,
        width: "100%",
        paddingBottom: 5,
        height: "100%",
        paddingTop: 40,
        paddingLeft: 40,
        alignItems: "flex-start",
      },
      contactContainer:{
        flexDirection:"row",
        backgroundColor: "#F6F6F6",
        width:"120%",
        marginLeft:-40,
        height:100,
        marginBottom:10
      },
      detailContainer:{
        marginLeft:20,
        paddingTop:15
      }

     
      
})
export default ContactUs