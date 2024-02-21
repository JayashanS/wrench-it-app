import React, { useEffect, useRef } from "react";
import { View, Text, Animated, Easing } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/wrenchit-white.png";

import Colors from "../../constants/Colors";

export default function Splash() {
  const navigation = useNavigation();
  const rotationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Starting");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotationValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [rotationValue]);

  const rotateInterpolate = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Animated.Image
          source={Logo}
          style={{
            width: 50,
            height: 50,
            marginRight: 10,
            transform: [{ rotate: rotateInterpolate }],
            justifyContent: "center",
            alignItems: "center",
          }}
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
