import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLogin } from "../../hooks/useLogin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Font from "../../constants/Fonts";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";

export default function Signup() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [errors, setErrors] = useState("");
  const { login, error, isLoading } = useLogin();
  const [user, setUser] = useState(null);

  const handleSubmit = async () => {
    try {
      await login(email, pw);
      const userData = await AsyncStorage.getItem("user");
      setUser(userData);
      if (userData) {
        navigation.navigate("Main");
      }
    } catch (error) {
      setErrors(error.message);
    }
  };

  const handleSignup = async () => {
    try {
      await login(email, pw);
      const userData = await AsyncStorage.getItem("user");
      setUser(userData);
      if (userData) {
        navigation.navigate("SignUp");
      }
    } catch (error) {
      setErrors(error.message);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={{ textAlign: "left" }}>
            <Text
              style={{
                fontFamily: Font["poppins-semiBold"],
                fontSize: FontSize.xxLarge,
                color: Colors.darkText,
                marginBottom: 10,
                maxWidth: "80%",
                textAlign: "center",
              }}
            >
              Login
            </Text>
          </View>

          <View style={{ paddingHorizontal: 10 }}>
            <CustomTextInput
              placeholder="Email"
              onChangeText={(newText) => setEmail(newText)}
              value={email}
            />
            <CustomTextInput
              placeholder="Password"
              onChangeText={(newText) => setPw(newText)}
              value={pw}
            />

            {error && (
              <Text style={{ fontSize: 14, color: "rgb(255, 0, 115)" }}>
                {error}
              </Text>
            )}
            {errors && (
              <Text style={{ fontSize: 14, color: "rgb(255, 0, 115)" }}>
                {errors}
              </Text>
            )}
            <CustomButton
              title="Login"
              onPress={handleSubmit}
              backgroundColor={Colors.primary}
            />
          </View>
          <TouchableOpacity onPress={handleSignup}>
            <Text style={styles.bodyText}>
              Do not have an account?
              <Text style={styles.linkText}> Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
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
  linkText: {
    fontSize: FontSize.medium,
    color: Colors.green,
    fontFamily: Font["poppins-regular"],
    textAlign: "center",
  },
});
