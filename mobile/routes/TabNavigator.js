// TabNavigator.js
import * as React from "react";
import { View, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import HomeScreen from "../screens/Common/Home";
import OngoingScreen from "../screens/Common/Ongoing";
import CommunityScreen from "../screens/Common/Community";

const renderScene = SceneMap({
  first: HomeScreen,
  second: OngoingScreen,
  third: CommunityScreen,
});

export default function TabNavigator({ navigation }) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Home" },
    { key: "second", title: "Ongoing" },
    { key: "third", title: "Community" },
  ]);

  const handleMenuButtonClick = () => {
    // Handle the menu button click here
    // For example, you can open a drawer or navigate to a menu screen
    console.log("Menu button clicked");
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "#fff" }}
      style={{ backgroundColor: "#176B87", paddingTop: 120 }}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={{
          marginLeft: 30,
          marginTop: 50,
          marginBottom: 20,
          zIndex: 1,
          position: "absolute",
        }}
        onPress={handleMenuButtonClick}
      >
        <Icon name="menu" size={24} color="#fff" />
      </TouchableOpacity>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
    </View>
  );
}
