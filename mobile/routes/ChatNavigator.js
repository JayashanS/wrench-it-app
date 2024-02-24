import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Chat from "../screens/Chats/Call";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat"
        options={{ headerShown: false }}
        component={Chat}
      />
    </Stack.Navigator>
  );
}
