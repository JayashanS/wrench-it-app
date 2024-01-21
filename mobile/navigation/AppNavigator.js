import * as React from "react";
import {
  View,
  useWindowDimensions,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/Home";
import NavigationScreen from "../screens/Navigation";
import ShopScreen from "../screens/Shop";

const Drawer = createDrawerNavigator();

const renderScene = SceneMap({
  home: HomeScreen,
  navigation: NavigationScreen,
  shop: ShopScreen,
});

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={styles.tabBar}
    tabStyle={styles.tab}
    labelStyle={styles.label}
  />
);

const AppNavigator = () => {
  const layout = useWindowDimensions();
  const navigation = useNavigation();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home" },
    { key: "navigation", title: "Navigation" },
    { key: "shop", title: "Shop" },
  ]);

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#176B87" barStyle="light-content" />

      {/* Custom Header with Menu Icon */}
      <View style={styles.header}>
        <TouchableOpacity onPress={openDrawer}>
          <Ionicons
            name="menu"
            size={30}
            color="white"
            style={styles.menuIcon}
          />
        </TouchableOpacity>
      </View>

      {/* TabView */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight - 30 : 0,
  },
  tabBar: {
    backgroundColor: "#176B87",
    height: 100,
    paddingTop: 50,
  },
  tab: {},
  indicator: {
    backgroundColor: "white",
  },
  label: {
    color: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#176B87",
    padding: 10,
  },
  menuIcon: {
    marginRight: 10,
  },
});

export default AppNavigator;
