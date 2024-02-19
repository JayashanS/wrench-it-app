import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Reservation from "../screens/Reservation/Map";

const Stack = createStackNavigator();

export default function ReservationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Reservation"
        component={Reservation}
        options={{
          title: "Reservation",
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
