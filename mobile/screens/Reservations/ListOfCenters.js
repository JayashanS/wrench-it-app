import * as React from "react";
import { View, Text } from "react-native";
import CenterCard from "../../components/CenterCard"; // Importing the CenterCard component

const GetGarages = () => {
  const [garages, setGarages] = React.useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://192.168.184.68:4000/api/garage/near/all",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            longitude: 80.7324,
            latitude: 6.1138,
          }),
        }
      );
      const data = await response.json();
      setGarages(data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      {garages.map((garage) => (
        <CenterCard
          key={garage._id}
          center={{
            name: garage.repairCenterName,
            location: `${garage.address.street}, ${garage.address.city}`,
            photo: garage.photoUrl,
            rating: 3.5,
            minCharge: garage.minCharge,
            maxCharge: garage.maxCharge,
            phoneNumber: garage.phoneNumber,
            distance: (garage.distance / 1000).toFixed(2),
          }}
        />
      ))}
    </View>
  );
};

export default GetGarages;
