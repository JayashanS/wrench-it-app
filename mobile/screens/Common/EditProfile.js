import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Image,
    SafeAreaView,
    TextInput,
    Alert
  } from "react-native";
import React, { useState,useEffect }  from 'react'
import Colors from "../../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";



  
const windowWidth = Dimensions.get('window').width;

const EditProfile=()=>{
    const [email,setEmail]=useState("");
    const [cPassword,setCPassword]=useState("");
    const [nPassword,setNPassword]=useState("");
    const [n2Password,setN2Password]=useState("");

   
    const [displayUrl,setDisplayUrl]=useState("");

    

    const navigation = useNavigation(); 
    const [selectedImage, setSelectedImage] = useState("");
      
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

   
    const handleName=(n)=>{
        setEmail(n);
    }
    const handleCpassword=(n)=>{
        setCPassword(n);
    }
    const handlenPassword=(n)=>{
        setNPassword(n);
    }
    const handlen2Password=(n)=>{
        setN2Password(n);
    }
    const handleSaveButton=()=>{
       
        if (!email || !cPassword || !nPassword || !n2Password) {
            Alert.alert("Field can not be empty");
            
        } else if (cPassword == nPassword) {
            console.log(cPassword+" "+nPassword);
            Alert.alert("New password should not be the same as the current password");
        } else if (nPassword !== n2Password) {
            Alert.alert("New password and confirm new password do not match");
        } else {
           handleChangepw();
            Alert.alert("Successfully Updated");
            handlePress();
        }
        
    }; const handleChangepw = async () => {
        const editData = {
        email:email, 
        currentPassword:cPassword, 
        newPassword:nPassword, 
        confirmPassword:n2Password,
          
        };
        console.log(editData);
        try {
          const response = await fetch(
            `http://${process.env.EXPO_PUBLIC_IP}:4000/api/user/changepw`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(editData),
            }
          );
    
          Alert.alert( "Updated successfully.");
        } catch (error) {
          console.error( error);
          Alert.alert("Error");
        }
      };
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
            //console.error("Error uploading photo:", error);
          }
        }
      
        getImage();
      }, [email]);
      
    
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
                        <Image source={displayUrl} style={styles.imageContainer2} />

                        <View style={styles.camera}>
                            <MaterialIcons name="photo-camera" size={32} color={Colors.dark}/>
                        </View>
                        </TouchableOpacity>
                    </View> 
                    <View style={styles.details}>

                        <Text style={{fontSize:16}}>Email</Text>
                        <View >
                                <TextInput style={styles.editDetails}
                                //placeholder={name}
                                placeholderTextColor={"#444"}
                                onChangeText={handleName}
                                />

                        </View>

                        <Text style={{fontSize:16}}>Current Password</Text>
                        <View >
                                <TextInput style={styles.editDetails} 
                                //placeholder="Current Password"
                                placeholderTextColor={"#444"}
                                onChangeText={handleCpassword}
                                secureTextEntry/>

                        </View>

                        <Text style={{fontSize:16}}>New Password</Text>
                        <View >
                                <TextInput style={styles.editDetails} 
                                //placeholder="New Password"
                                placeholderTextColor={"#444"}
                                onChangeText={handlenPassword}
                                secureTextEntry/>

                        </View>

                        <Text style={{fontSize:16}}>Confirm New Password</Text>
                        <View >
                                <TextInput style={styles.editDetails} 
                                //placeholder="New Password"
                                placeholderTextColor={"#444"}
                                onChangeText={handlen2Password}
                                secureTextEntry/>

                        </View>
                    </View> 
                <TouchableOpacity style={styles.saveContainer} onPress={handleSaveButton}>
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
        marginTop: 0,
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
        paddingTop:130,
        marginLeft:-15
        
      },
      editDetails:{
        backgroundColor:"#aaa",
        color:"#000",
        width:270,
        height:35,
        marginTop:15,
        marginBottom:20,
        borderRadius:10,
        paddingLeft:20
      },

      saveContainer:{
        backgroundColor:Colors.primary,
        marginTop:5,
        height:44,
        width:"100%",
        marginLeft:-20,
        borderRadius:6,
        alignItems:"center",
        justifyContent:"center"
      }
})
export default EditProfile