import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useLogout } from "../../hooks/useLogout";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { logout } = useLogout();
  const handleLogout = async (e) => {
    logout();
    navigation.navigate("Login");
  };
  return (
    <View>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Profile Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
