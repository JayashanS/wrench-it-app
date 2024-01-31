import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import DatePicker from "@react-native-community/datetimepicker";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;

export default function Signup() {
  const navigation = useNavigation();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [bday, setBday] = useState(new Date());
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [cpw, setCpw] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSubmit = async () => {
    navigation.navigate("Main", { screen: "Community" });
  };
  const handleSearch = async () => {
    navigation.navigate("NearByCenters");
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
                fontSize: 30,
                fontFamily: "Roboto",
                fontWeight: "300",
                color: "#176B87",
                marginBottom: 10,
              }}
            >
              Register with Us
            </Text>
          </View>

          <View style={{ paddingHorizontal: 10 }}>
            <TextInput
              placeholder="First Name"
              value={fname}
              onChangeText={setFname}
              style={{
                width: windowWidth * 0.8,
                height: windowWidth * 0.1,
                marginBottom: 10,
                borderColor: "#176B87",
                borderWidth: 1,
                borderRadius: 5,
                paddingHorizontal: 10,
              }}
            />
            <TextInput
              placeholder="Last Name"
              value={lname}
              onChangeText={setLname}
              style={{
                width: windowWidth * 0.8,
                height: windowWidth * 0.1,
                marginBottom: 10,
                borderColor: "#176B87",
                borderWidth: 1,
                borderRadius: 5,
                paddingHorizontal: 10,
              }}
            />
            <TouchableOpacity
              style={{ width: "80%", marginBottom: 10 }}
              onPress={() => setShowDatePicker(true)}
            >
              <TextInput
                placeholder="Select Birthday"
                value={bday.toDateString()}
                editable={false}
                style={{
                  width: windowWidth * 0.6,
                  height: windowWidth * 0.1,
                  borderColor: "#176B87",
                  borderWidth: 1,
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  height: 40,
                  justifyContent: "center",
                }}
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
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              style={{
                width: windowWidth * 0.8,
                height: windowWidth * 0.1,
                marginBottom: 10,
                borderColor: "#176B87",
                borderWidth: 1,
                borderRadius: 5,
                paddingHorizontal: 10,
              }}
            />
            <TextInput
              placeholder="Password"
              value={pw}
              onChangeText={setPw}
              secureTextEntry
              style={{
                width: windowWidth * 0.6,
                height: windowWidth * 0.1,
                marginBottom: 10,
                borderColor: "#176B87",
                borderWidth: 1,
                borderRadius: 5,
                paddingHorizontal: 10,
              }}
            />
            <TextInput
              placeholder="Confirm Password"
              value={cpw}
              onChangeText={setCpw}
              secureTextEntry
              style={{
                width: windowWidth * 0.6,
                height: windowWidth * 0.1,
                marginBottom: 10,
                borderColor: "#176B87",
                borderWidth: 1,
                borderRadius: 5,
                paddingHorizontal: 10,
              }}
            />
            {error && (
              <Text style={{ fontSize: 14, color: "rgb(255, 0, 115)" }}>
                {error}
              </Text>
            )}
            <TouchableOpacity
              onPress={handleSubmit}
              disabled={false}
              style={{
                width: windowWidth * 0.8,
                height: windowWidth * 0.1,
                height: 40,
                backgroundColor: "#176B87",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
                marginBottom: 10,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 16 }}>Register</Text>
            </TouchableOpacity>
            <View style={{ justifyContent: "center", alignItems: "flex-end", marginLeft: 100 }}>
            <TouchableOpacity onPress={handleSearch}><Ionicons name="search" size={40} color="#125C75" /></TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
