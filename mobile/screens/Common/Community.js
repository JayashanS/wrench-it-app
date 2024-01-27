import React from "react";
import { View, Text,Button } from "react-native";

const CommunityScreen = ({ navigation }) => {
  const handleButtonPress = () => {
    navigation.navigate("Profile");
  };

  return (
    <View>
      <View>
        {/* Your app bar content goes here */}
      </View>
      <Text >Profile Screen</Text>

      {/* Button to navigate to OngoingScreen */}
      <Button title="Go to Ongoing Screen" onPress={handleButtonPress} />
    </View>
  );
};

export default CommunityScreen;
