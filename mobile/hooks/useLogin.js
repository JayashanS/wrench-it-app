import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Initialize isLoading to false
  const { dispatch } = useAuthContext();

  const login = async (email, pw) => {
    setIsLoading(true); // Set loading state to true when login starts
    setError(null);

    try {
      const response = await fetch(
        `http://${process.env.EXPO_PUBLIC_IP}:4000/api/user/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, pw }),
        }
      );

      if (!response.ok) {
        const json = await response.json(); // Handle case where response is not OK
        setIsLoading(false);
        setError(json.error);
      } else {
        const json = await response.json();
        await AsyncStorage.setItem("user", JSON.stringify(json));
        dispatch({ type: "LOGIN", payload: json });
        setIsLoading(false);
      }
    } catch (error) {
      console.error("An error occurred during login:", error); // Log any unexpected errors
      setIsLoading(false); // Ensure loading state is updated even in case of error
      setError("An unexpected error occurred. Please try again later.");
    }
  };

  return { login, isLoading, error };
};
