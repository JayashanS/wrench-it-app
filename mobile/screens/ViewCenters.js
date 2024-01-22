import React from "react";
import { View, Text,StyleSheet } from "react-native";


const ViewCentersScreen = () => {
    return (
      <View style={styles.container}>
        {/* First Section */}
        <View style={styles.section}>
          <Text>Section 1</Text>
        </View>
  
        {/* Second Section */}
        <View style={styles.section}>
          <Text>Section 2</Text>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1, // Use flex property to make the container take the full height
      flexDirection: "row", // Use flexDirection to arrange the sections vertically
    },
    section: {
      flex: 1, // Each section takes equal space
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1, // Optional: Add border for clarity
      borderColor: "black",
    },
  });
  
export default ViewCentersScreen;
