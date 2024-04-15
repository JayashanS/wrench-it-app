import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import NetInfo from "@react-native-community/netinfo";

const MyComponent = () => {
  const [ipv4Address, setIpv4Address] = useState(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected && state.details.ipAddress) {
        // Check if the IP address is IPv4
        if (state.details.ipAddress.includes(".")) {
          setIpv4Address(state.details.ipAddress);
          console.log("IPv4 Address:", state.details.ipAddress);
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>IPv4 Address:</Text>
      <Text>{ipv4Address || "Loading..."}</Text>
    </View>
  );
};

export default MyComponent;
