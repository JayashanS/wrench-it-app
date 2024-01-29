// OffersPage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const members = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Members Page</Text>
      {/* Add content specific to the Members Page if needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default members;