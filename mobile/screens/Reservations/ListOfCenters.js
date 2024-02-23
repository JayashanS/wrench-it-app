import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import CenterCard from "../../components/CenterCard";

const ListOfCenters = () => {
  // Dummy data for the list of centers
  const centers = [
    {
      id: 1,
      name: "Center 1",
      location: "Location 1",
      photo: "https://via.placeholder.com/150",
      rating: 4.5,
      minCharge: "$20",
      maxCharge: "$50",
    },
    {
      id: 2,
      name: "Center 2",
      location: "Location 2",
      photo: "https://via.placeholder.com/150",
      rating: 3.5,
      minCharge: "$25",
      maxCharge: "$60",
    },
    {
      id: 3,
      name: "Center 3",
      location: "Location 3",
      photo: "https://via.placeholder.com/150",
      rating: 5,
      minCharge: "$30",
      maxCharge: "$70",
    },
    {
      id: 4,
      name: "Center 3",
      location: "Location 3",
      photo: "https://via.placeholder.com/150",
      rating: 5,
      minCharge: "$30",
      maxCharge: "$70",
    },
    {
      id: 5,
      name: "Center 3",
      location: "Location 3",
      photo: "https://via.placeholder.com/150",
      rating: 5,
      minCharge: "$30",
      maxCharge: "$70",
    },
    {
      id: 6,
      name: "Center 3",
      location: "Location 3",
      photo: "https://via.placeholder.com/150",
      rating: 5,
      minCharge: "$30",
      maxCharge: "$70",
    },
    // Add more center objects as needed
  ];

  return (
    <ScrollView style={styles.container}>
      {centers.map((center) => (
        <CenterCard key={center.id} center={center} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default ListOfCenters;
