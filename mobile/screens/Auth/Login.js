import React, { useState } from "react";
import { View, Text, TextInput, Button, Image } from "react-native";
import DatePicker from "@react-native-community/datetimepicker";
import Logo from "../../assets/wrenchit.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const handleSubmit = async () => {};

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EEF2F5",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={Logo}
            style={{ width: 50, height: 50, marginRight: 10 }}
          />
          <Text
            style={{ fontSize: 30, fontFamily: "Roboto", fontWeight: "500" }}
          >
            Wrenchit
          </Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={{ paddingHorizontal: 10 }}>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              style={{
                width: "80%",
                marginBottom: 10,
                borderColor: "#09BEB1",
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
                width: "80%",
                marginBottom: 10,
                borderColor: "#09BEB1",
                borderWidth: 1,
                borderRadius: 5,
                paddingHorizontal: 10,
              }}
            />

            <Button
              title="Register"
              onPress={handleSubmit}
              disabled={isLoading}
              color="#09BEB1"
              style={{ width: "80%", marginBottom: 10 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
