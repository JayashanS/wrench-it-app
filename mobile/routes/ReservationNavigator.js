import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constants/Colors";

import Reservation from "../screens/Reservations/Map";

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
