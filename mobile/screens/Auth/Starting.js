import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { StatusBar } from "react-native";

import Font from "../../constants/Fonts";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";

import Start from "../../assets/wrenchit-start.jpg";
import CustomButton from "../../components/CustomButton";

const windowWidth = Dimensions.get("window").width;
const Starting = ({ navigation }) => {
  const handleButtonClick = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <View style={styles.imageContainer}>
        <Image source={Start} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome to Wrench it</Text>
        <Text style={styles.bodyText}>
          Discover nearby repair centers in moments of need! Sign up now to
          access exclusive features.
        </Text>
      </View>
      <CustomButton
        title="Get Started"
        onPress={() => handleButtonClick("SignUp")}
        backgroundColor={Colors.primary}
      />
      <CustomButton
        title="Quick Find"
        onPress={() => handleButtonClick("NearByCenters")}
        backgroundColor={Colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  imageContainer: {},
  image: {
    width: 500,
    height: 500,
    resizeMode: "contain",
    marginTop: 10,
    marginBottom: 20,
  },
  contentContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: FontSize.xxLarge,
    color: Colors.darkText,
    fontFamily: Font["poppins-bold"],
    textAlign: "center",
  },
  bodyText: {
    fontSize: FontSize.medium,
    color: Colors.text,
    fontFamily: Font["poppins-regular"],
    textAlign: "center",
  },
});

export default Starting;
