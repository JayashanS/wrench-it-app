import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import events from "../screens/Common/events";
import members from "../screens/Common/members";
import offers from "../screens/Common/offers";

const Stack = createStackNavigator();

export default function communityStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Event"
        options={{ headerShown: false }}
        component={Events}
      />
    
 
   
      <Stack.Screen
        name="Members"
        options={{ headerShown: false }}
        component={Members}
      />
    
    
    <Stack.Screen
      name="Offers"
      options={{ headerShown: false }}
      component={Offers}
    />
  </Stack.Navigator>
  ); 
}