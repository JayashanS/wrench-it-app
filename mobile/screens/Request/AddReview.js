import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AddReview = () => {
  const navigation = useNavigation();
  const [review, setReview] = useState(""); 

  const handleReviewSubmit = () => {
  
    console.log("Review submitted:", review);
 
    navigation.navigate("Main", { screen: "OngoingScreen", params: { index: 'second'} });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>
          Write your review for the repair center
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setReview(text)}
          value={review}
          placeholder="Write your review here..."
          multiline={true}
          numberOfLines={4}
        />
        <TouchableOpacity onPress={handleReviewSubmit} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit Review</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F1EEFF",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    width: "90%",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000", 
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 }, 
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#125C75",
    marginBottom: 20,
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
    minHeight: 100,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: "#125C75",
    borderRadius: 8,
    width: 150,
    paddingVertical: 10,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AddReview;
