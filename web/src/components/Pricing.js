import React, { useState } from "react";
import EditableField from "./EditableField";

const UserProfile = () => {
  const [username, setUsername] = useState("JohnDoe");
  const [email, setEmail] = useState("john.doe@example.com");

  const handleSave = (fieldType, value) => {
    // You can add logic here to save the edited value, for example, make an API call.
    console.log(`Saved ${fieldType}: ${value}`);
    // Assuming you want to update the state after saving
    if (fieldType === "username") {
      setUsername(value);
    } else if (fieldType === "email") {
      setEmail(value);
    }
    // Update other state variables if needed
  };

  return (
    <div className="user-profile-container">
      <EditableField
        label="Username"
        value={username}
        fieldType="username"
        onSave={(value) => handleSave("username", value)}
      />
      <EditableField
        label="Email"
        value={email}
        fieldType="email"
        onSave={(value) => handleSave("email", value)}
      />
      {/* Add more EditableField components for other fields */}
    </div>
  );
};

export default UserProfile;
