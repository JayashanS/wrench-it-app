import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSignup } from "../../hooks/useSignup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Font from "../../constants/Fonts";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";

import DatePicker from "@react-native-community/datetimepicker";

export default function Signup() {
  const navigation = useNavigation();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [bday, setBday] = useState(new Date());
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [cpw, setCpw] = useState("");
  const [error, setError] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { signup, errors, isLoading } = useSignup();
  const [user, setUser] = useState(null);

  const handleSubmit = async () => {
    try {
      await signup(fname, lname, bday, email, pw, cpw);
      const userData = await AsyncStorage.getItem("user");
      setUser(userData);
      if (userData) {
        navigation.navigate("Main");
      }
    } catch (error) {
      setError(error.message);
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
              Register with Us
            </Text>
          </View>

          <View style={{ paddingHorizontal: 10 }}>
            <CustomTextInput
              placeholder="First Name"
              onChangeText={(newText) => setFname(newText)}
              value={fname}
            />
            <CustomTextInput
              placeholder="Last Name"
              onChangeText={(newText) => setLname(newText)}
              value={lname}
            />
            <TouchableOpacity
              style={{ width: "100%", marginBottom: 10 }}
              onPress={() => setShowDatePicker(true)}
            >
              <CustomTextInput
                placeholder="Birthday"
                onChangeText={(newText) => setBday(newText)}
                value={bday.toDateString()}
                editable={false}
              />
            </TouchableOpacity>
            {showDatePicker && (
              <DatePicker
                value={bday}
                onChange={(event, selectedDate) => {
                  const currentDate = selectedDate || bday;
                  setShowDatePicker(false);
                  setBday(currentDate);
                }}
              />
            )}
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
            <CustomTextInput
              placeholder="Confirm Password"
              onChangeText={(newText) => setCpw(newText)}
              value={cpw}
            />

            {error && (
              <Text style={{ fontSize: 14, color: "rgb(255, 0, 115)" }}>
                {error}
              </Text>
            )}
            <CustomButton
              title="Sign Up"
              onPress={handleSubmit}
              backgroundColor={Colors.primary}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
