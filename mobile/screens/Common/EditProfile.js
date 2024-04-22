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

const EditProfile=()=>{
    const [name,setName]=useState("kavishka");
    const [password,setPassword]=useState("random");

    const navigation = useNavigation(); 
    const [selectedImage, setSelectedImage] = [
        require("../../assets/user_profile.png"),
      ];
      
    const handleImageSelect = async() => {
        let result= await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[4,3],
            quality:1
        });
        console.log(result);
        if(!result.canceled){
            setSelectedImage(result.assets[0].uri)
        }
    };

    const handlePress = () => {
        navigation.navigate("Profile");
      };
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
               
                <TouchableOpacity onPress={handlePress}>
                    <MaterialIcons  name="keyboard-arrow-left" size={36} color={Colors.text}/>
                </TouchableOpacity>

                <Text style={{fontSize:22,paddingLeft:50}}>Edit Profile</Text> 
            </View>    
            <View style={styles.bodyContainer}>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity onPress={handleImageSelect}>
                        <Image source={selectedImage} style={styles.imageContainer2} />

                        <View style={styles.camera}>
                            <MaterialIcons name="photo-camera" size={32} color={Colors.dark}/>
                        </View>
                        </TouchableOpacity>
                    </View> 
                    <View style={styles.details}>

                        <Text style={{fontSize:12}}>Name</Text>
                        <View style={styles.editDetails}>
                                <TextInput value={name} onChangeText={value=>setName(value)} editable={true}/>

                        </View>

                        <Text style={{fontSize:12}}>Current Password</Text>
                        <View style={styles.editDetails}>
                                <TextInput value={name} onChangeText={value=>setName(value)} editable={true} secureTextEntry/>

                        </View>

                        <Text style={{fontSize:12}}>New Password</Text>
                        <View style={styles.editDetails}>
                                <TextInput value={name} onChangeText={value=>setName(value)} editable={true} secureTextEntry/>

                        </View>
                        <Text style={{fontSize:12}}>New Password</Text>
                        <View style={styles.editDetails}>
                                <TextInput value={name} onChangeText={value=>setName(value)} editable={true} secureTextEntry/>

                        </View>
                    </View> 
                <TouchableOpacity style={styles.saveContainer}>
                    <Text style={{color:Colors.onPrimary, fontSize:20}}>Save Changes</Text>

                </TouchableOpacity>

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
        paddingTop: 40,
        fontSize:22, 
        //justifyContent:"center"
       
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

      iconContainer: {
        color: Colors.dark,
        marginRight: windowWidth * 0.5,
        marginTop: 10,
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
        marginTop: 10,
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
      camera:{
        position:"absolute",
        bottom:0,
        right:10,
        zIndex:9999
      },
      details:{
        flexDirection:"column",
        marginBottom:20,
        paddingTop:150,
        
      },
      editDetails:{
        marginTop:10,
        marginBottom:20,
        height:30,
        width:"100%",
        borderColor:Colors.dark,
        borderWidth:1,
        borderRadius:4,
        marginVertical:6,
        justifyContent:"center",
        padding:20
      },

      saveContainer:{
        backgroundColor:Colors.primary,
        marginTop:5,
        height:44,
        width:"100%",
        borderRadius:6,
        alignItems:"center",
        justifyContent:"center"
      }
})
export default EditProfile