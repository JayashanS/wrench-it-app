import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constants/Colors";
import Offer from "../screens/Community/Offers/Offers.js";

const Stack = createStackNavigator();

export default function OffersStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Offer"
        component={Offer}
        options={{
          title: "Offers",
          headerStyle: {
            backgroundColor: "#0378ad",
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
