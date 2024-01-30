import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/wrenchit.png";

export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("SignUp");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#176B87",
      }}
    >
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={Logo}
          style={{ width: 50, height: 50, marginRight: 10 }}
        />
        <Text
          style={{
            fontSize: 50,
            fontFamily: "Roboto",
            fontWeight: "500",
            color: "#fff",
          }}
        >
          Wrenchit
        </Text>
      </View>
    </View>
  );
}
