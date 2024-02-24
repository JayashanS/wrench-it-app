import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constants/Colors";
import OffersScreen from "../screens/Community/Offers/Offers.js";



const Stack = createStackNavigator();

export default function OffersStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OffersScreen"
        component={Offers}
        options={{
          title: "Offers",
          headerStyle: {
            backgroundColor: Colors.primary,
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
