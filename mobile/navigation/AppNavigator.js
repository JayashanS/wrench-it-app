// navigation/AppNavigator.js
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../components/screens/HomeScreen";
import ProfileScreen from "../components/screens/ProfileScreen";
import SettingsScreen from "../components/screens/SettingsScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
