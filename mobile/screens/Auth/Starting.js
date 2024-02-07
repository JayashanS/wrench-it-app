import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Start from "../../assets/wrenchit-start.png";
import Img from "../../assets/wrenchit-white.png";

const windowWidth = Dimensions.get("window").width;
const Starting = ({ navigation }) => {
  const handleButtonClick = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={Start} style={styles.image} />
      </View>

      <Text style={styles.title}>Welcome to Our App</Text>
      <Text style={styles.body}>
        Discover nearby repair centers in moments of need! Sign up now to access
        exclusive features for a seamless experience. Or, for quick assistance
        during emergencies, simply tap the 'Quick Find' icon below.
      </Text>
      <TouchableOpacity
        onPress={() => handleButtonClick("SignUp")}
        style={{
          width: windowWidth * 0.4,
          height: windowWidth * 0.1,
          height: 40,
          backgroundColor: "#176B87",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
          marginLeft: 30,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 16 }}>Get Started</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchableContainer}
        onPress={() => handleButtonClick("NearByCenters")}
      >
        <Image source={Img} style={styles.icon} />
        <Text style={styles.buttonText}>Quick Find</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
  },
  imageContainer: {
    marginLeft: windowWidth * 0.12,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    marginTop: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft: 30,
  },
  body: {
    fontSize: 18,
    color: "#7d7f80",
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  touchableContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
    alignItems: "center",
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#125C75",
  },
});

export default Starting;
