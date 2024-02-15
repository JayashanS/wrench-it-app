import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Events from "../screens/Common/Events";
import Members from "../screens/Common/Members";
import Offers from "../screens/Common/Offers";
import Offers from "../screens/Common/Offers";
import Members from "../screens/Common/Members";

const Stack = createStackNavigator();

export default function CommunityStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Events"
        options={{
          title: "Events",
          headerStyle: {
            backgroundColor: "#125C75",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        component={Events}
      />

      <Stack.Screen
        name="Offers"
        component={Offers}
        options={{
          title: "Offers",
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
        name="Members"
        component={Members}
        options={{
          title: "Offers Success",
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
