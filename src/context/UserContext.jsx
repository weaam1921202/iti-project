import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  function handelLogout(navigate) {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  const registerUser = async (
    { fullName, email, password, confirmPassword },
    navigate
  ) => {
    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords do not match!",
      });
      return;
    }

    try {
      const { data: existingUsers } = await axios.get(
        `http://localhost:3000/users?email=${email}`
      );

      if (existingUsers.length > 0) {
        Swal.fire({
          title: "Email already registered. Please login.",
          icon: "info",
        });
        navigate("/login");
        return;
      }

      const newUser = {
        fullName,
        email,
        password,
      };

      const { data: registeredUser } = await axios.post("http://localhost:3000/users", newUser);
      
      setUser(registeredUser);

      Swal.fire({
        title: "Registration successful!",
        icon: "success",
      });

      navigate("/");
    } catch (error) {
      console.error("Registration error:", error);
      if (error.response) {
        console.error("Error data:", error.response.data);
        console.error("Error status:", error.response.status);
        console.error("Error headers:", error.response.headers);
        Swal.fire("Registration failed: Server responded with an error.", "", "error");
      } else if (error.request) {
        console.error("Error request:", error.request);
        Swal.fire("Registration failed: No response from server. Is JSON Server running?", "", "error");
      } else {
        console.error("Error message:", error.message);
        Swal.fire("Registration failed: An unexpected error occurred.", "", "error");
      }
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, registerUser, handelLogout }}>
      {children}
    </UserContext.Provider>
  );
}