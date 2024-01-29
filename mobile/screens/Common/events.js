// OffersPage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const events = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Events Page</Text>
      {/* Add content specific to the Events Page if needed */}
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

export default events;