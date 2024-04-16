import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLogin } from "../../hooks/useLogin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Font from "../../constants/Fonts";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [errors, setErrors] = useState("");
  const { login, error, isLoading } = useLogin();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUserAndNavigate = async () => {
      if (user) {
        navigation.navigate("Main");
      }
    };
    checkUserAndNavigate();
  }, [user, navigation]);

  const handleSubmit = async () => {
    try {
      await login(email, pw);
      const userData = await AsyncStorage.getItem("user");
      setUser(userData);
    } catch (error) {
      setErrors(error.message);
    }
  };

  const handleSignup = async () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Login</Text>
      </View>

      <View style={styles.contentContainer}>
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

        {error && <Text style={styles.errorText}>{error}</Text>}
        {errors && <Text style={styles.errorText}>{errors}</Text>}

        <CustomButton
          title="Login"
          onPress={handleSubmit}
          backgroundColor={Colors.primary}
        />
      </View>

      <TouchableOpacity onPress={handleSignup}>
        <Text style={styles.bodyText}>
          Don't have an account? <Text style={styles.linkText}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  contentContainer: {
    marginBottom: 20,
    width: "100%",
  },
  title: {
    fontSize: FontSize.xxLarge,
    color: Colors.darkText,
    fontFamily: Font["poppins-bold"],
    textAlign: "center",
    marginBottom: 10,
  },
  bodyText: {
    fontSize: FontSize.medium,
    color: Colors.text,
    fontFamily: Font["poppins-regular"],
    textAlign: "center",
  },
  linkText: {
    color: Colors.green,
  },
  errorText: {
    fontSize: 14,
    color: "rgb(255, 0, 115)",
    textAlign: "center",
    marginTop: 5,
  },
});
