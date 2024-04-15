import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const Offers = () => {
  return (
    
    <View style={styles.container}>

      <View style ={styles.offerShow}>
        <Text style={styles.offerShowText}>Latest Offers</Text>
        {/* Slideshow of the offer */}
        <View style={styles.offerSlideShow}>
        {/* Company Logo and name */}
          <View style={styles.companyLogoAndName}>
            {/* Company logo */}
            <View style={styles.companyLogo}>
              <View style={styles.companyLogoPic}>

              </View>
            </View>
            {/* Company Name */}
            <View style={styles.companyName}>
            <TextInput
                style={styles.companyNameInput}
                placeholder="Enter company name"
                editable={true}
              />
            </View>
          </View>
          {/* Slideshow */}
          <Text style={styles.offerSlideShowText}>Slide Show</Text>
        </View>
      </View>

      <View style={styles.createOffer}>
        <Text style={styles.createOfferText}>Create Offer</Text>
        <View style={styles.createOfferBox}>
          <Text style={styles.createOfferBoxText}>Slide Show</Text>
        </View>
      </View>

    </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding:15,
  },
  offerShow: {
    height: windowWidth *1, 
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#176B87",
  },
  offerShowText:{
    flex: 1,
    /* borderWidth : 1, */
    borderColor: "#000000",
    width: windowWidth * 0.922,
    padding: 5,
  },
 
  companyLogoAndName: {
    flex:1,
    flexDirection: "row", 
    /* borderWidth: 1, */
    borderColor: "#000000",
    /* width: windowWidth * 0.9, */
    backgroundColor: "#8fbc8f", /* Green */ 
    height: windowWidth * 0.15,
  },
  companyLogo: {
    flex: 1,
    justifyContent: 'center', // Aligns items vertically in the center
    alignItems: 'center', 
    flexDirection: "row",
    /* borderWidth: 1,
    borderColor: "#000000", */
    width: windowWidth * 0.05,
    
  },
  companyLogoPic :{
    width: windowWidth * 0.15,
    height: windowWidth * 0.15, // Ensure it's a square
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: (windowWidth * 0.15) / 2, // This makes it a circle
    overflow: "hidden",
  
  },
  companyName: {
    flex: 4,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  
  companyNameInput: {
    borderWidth: 1,
    borderColor: "#000000",
    padding: 5,
  },
  offerSlideShow : {
    flex :7,
    borderWidth : 1,
    borderColor: "#000000",
  },
  offerSlideShowText:{
    flex :3,
    /* borderWidth : 1, */
    borderColor: "#000000",
    backgroundColor :"#8b0000", /* Red */
  },
  createOffer:{
    marginTop: windowWidth * 0.01,
    height: windowWidth * 0.78 ,
    borderWidth: 1,
    borderColor: "#176B87",
  },
  createOfferText:{
    flex:1,
    /* borderWidth : 1, */
    borderColor: "#000000",
    width: windowWidth * 0.922,
    height: windowWidth*0.075,
    padding: 5,
  },
  createOfferBox : {
    flex :5,
    /* borderWidth : 1, */
    borderColor: "#000000",
  },

});

export default Offers;
