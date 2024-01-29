import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Events from "../screens/Common/Events";
import Members from "../screens/Common/Members";
import Offers from "../screens/Common/Offers";

const Stack = createStackNavigator();

export default function CommunityStack() {
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