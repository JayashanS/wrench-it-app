import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./routes/TabNavigator";
import Profile from "./screens/Request/Profile";
import RequestNavigator from "./routes/RequestNavigator";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          options={{ headerShown: false }}
          component={TabNavigator}
        />
        <Stack.Screen
          name="Request"
          options={{ headerShown: false }}
          component={RequestNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
