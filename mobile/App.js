// App.js

import React, { useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./shared/Tabs";
import HomeScreen from "./screens/Home";
import NavigationScreen from "./screens/Navigation";
import ShopScreen from "./screens/Shop";

const Stack = createStackNavigator();

const App = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }} // hide the header for the Tabs component
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Navigation" component={NavigationScreen} />
        <Stack.Screen name="Shop" component={ShopScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
