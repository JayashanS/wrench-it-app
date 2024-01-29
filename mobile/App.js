import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./routes/TabNavigator";
import Profile from "./screens/Request/Profile";
import RequestNavigator from "./routes/RequestNavigator";

import communitynavigator from "./routes/communitynavigator";
import Profile2 from "./screens/Common/Profile";

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
        <Stack.Screen

          name="community"
          options={{ headerShown: false }}
          component={communitynavigator}
        />

          name="Profile2"
          options={{ headerShown: false }}
          component={Profile2}
          />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
