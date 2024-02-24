import * as React from "react";
import { View, Text, Dimensions, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { TouchableOpacity } from "react-native";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import Colors from "../constants/Colors";

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
  const windowWidth = Dimensions.get("window").width;
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Home" },
    { key: "second", title: "Ongoing" },
    { key: "third", title: "Community" },
  ]);

  const handleMenuButtonClick = () => {
    console.log("Menu button clicked");
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "#fff" }}
      style={{ backgroundColor: Colors.primary, paddingTop: 120 }}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="transparent" barStyle="light-content" />
      <TouchableOpacity
        style={{
          marginLeft: windowWidth * 0.9,
          marginTop: 50,
          marginBottom: 20,
          zIndex: 1,
          position: "absolute",
        }}
        onPress={handleMenuButtonClick}
      >
        <Icon name="menu" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginLeft: windowWidth * 0.05,
          marginTop: 50,
          marginBottom: 20,
          zIndex: 1,
          position: "absolute",
        }}
      >
        <Text style={{ fontSize: 20, color: "#fff" }}>Wrench it</Text>
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
