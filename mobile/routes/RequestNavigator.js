import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screens/Request/Profile";

const Stack = createStackNavigator();

export default function RequestStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        options={{ headerShown: false }}
        component={Profile}
      />
    </Stack.Navigator>
  );
}
