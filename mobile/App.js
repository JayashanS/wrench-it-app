// App.js
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./routes/TabNavigator";

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
<<<<<<< Updated upstream
        <Stack.Screen name="Wrench it" component={TabNavigator} />
=======
        <Stack.Screen
          name="Main"
          options={{ headerShown: false }}
          component={TabNavigator}
        />
>>>>>>> Stashed changes
      </Stack.Navigator>
    </NavigationContainer>
  );
}
