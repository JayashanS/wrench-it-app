import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View , TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./routes/TabNavigator";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Wrench it" component={TabNavigator} />
        <TextInput style={styles.searchBar} placeholder="Search" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBar: {
    width: '90%',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
});
