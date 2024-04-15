import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../screens/Auth/Splash";
import Starting from "../screens/Auth/Starting";
import Login from "../screens/Auth/Login";
import SignUp from "../screens/Auth/SignUp";
import Profile from "../screens/Request/Profile";

import RequestSuccess from "../screens/Request/RequestSuccess";
import NearByCenters from "../screens/Common/NearByCenters";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        options={{ headerShown: false }}
        component={Splash}
      />
      <Stack.Screen
        name="Starting"
        options={{ headerShown: false }}
        component={Starting}
      />
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={Login}
      />

      <Stack.Screen
        name="SignUp"
        options={{ headerShown: false }}
        component={SignUp}
      />

      <Stack.Screen
        name="NearByCenters"
        component={NearByCenters}
        options={{
          title: "Repair Centers Near You",
          headerStyle: {
            backgroundColor: "#125C75",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />

      <Stack.Screen
        name="Profile"
        options={{
          title: "Profile",
          headerStyle: {
            backgroundColor: "#125C75",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        component={Profile}
      />

      <Stack.Screen
        name="RequestSuccess"
        component={RequestSuccess}
        options={{
          title: "Assistance Success",
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
