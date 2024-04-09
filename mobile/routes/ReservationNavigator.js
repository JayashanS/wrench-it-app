import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constants/Colors";

import Reservation from "../screens/Reservations/Reservation";
import NewReservation from "../screens/Reservations/NewReservation";
import NearByCenters from "../screens/Common/NearByCenters";

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
        name="NewReservation"
        component={NewReservation}
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
    </Stack.Navigator>
  );
}
