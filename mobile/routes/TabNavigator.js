import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../screens/Common/Home";
import OngoingScreen from "../screens/Common/Ongoing";
import CommunityScreen from "../screens/Common/Community";
import ProfileScreen from "../screens/Common/Profile";

const Tab = createMaterialTopTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Ongoing" component={OngoingScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
     
    </Tab.Navigator>
  );
}
export default TabNavigator;
