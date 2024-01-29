import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screens/Request/Profile";
import Assistance from "../screens/Request/Assistance";

const Stack = createStackNavigator();

export default function RequestStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
       
        options={{ title: "Profile",
        headerStyle: {
          backgroundColor: "#125C75",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        }, }}
        component={Profile}
      />

<Stack.Screen
          name="Assistance"
          component={Assistance}
          options={{
            title: "Assistance",
            headerStyle: {
              backgroundColor: "#125C75",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
    </Stack.Navigator>
  );
}
