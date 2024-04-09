import React, { useCallback, useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import SplashScreen from "./screens/Auth/Splash";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthNavigator from "./routes/AuthNavigator";
import TabNavigator from "./routes/TabNavigator";
import RequestNavigator from "./routes/RequestNavigator";
import OffersNavigator from "./routes/OffersNavigator";
import EventsNavigator from "./routes/EventsNavigator";
import ReservationNavigator from "./routes/ReservationNavigator";
import ChatNavigator from "./routes/ChatNavigator";
import ProfileScreen from "./screens/Common/Profile";
import Colors from "./constants/Colors";

import { AuthContextProvider } from "./context/AuthContext";

const Stack = createStackNavigator();

export default function App() {
  const [initialRoute, setInitialRoute] = useState("Splash");
  const [fontsLoaded, fontError] = useFonts({
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "poppins-semiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await AsyncStorage.getItem("user");
        if (user) {
          setInitialRoute("Main");
        } else {
          setInitialRoute("Auth");
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };

    checkAuth();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <AuthContextProvider>
      <NavigationContainer>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <Stack.Navigator initialRouteName={initialRoute}>

          {/* <Stack.Screen
            name="Auth"
            options={{ headerShown: false }}
            component={AuthNavigator}
  /> */}
          <Stack.Screen
            name="Main"
            options={{ headerShown: false }}
            component={TabNavigator}
          />
          <Stack.Screen
            name="Request"
            options={{ headerShown: false }}
            component={RequestNavigator}
          />
          <Stack.Screen
            name="Reservations"
            options={{ headerShown: false }}
            component={ReservationNavigator}
          />
          <Stack.Screen
            name="Chat"
            options={{ headerShown: false }}
            component={ChatNavigator}
          />
          <Stack.Screen
            name="Offers"
            options={{ headerShown: false }}
            component={OffersNavigator}
          />
          <Stack.Screen
            name="Events"
            options={{ headerShown: false }}
            component={EventsNavigator}
          />

          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContextProvider>
  );
}
