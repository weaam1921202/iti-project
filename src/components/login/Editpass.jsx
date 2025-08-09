import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import Swal from "sweetalert2";

export default function Editpass() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUpdate = async () => {
    if (!email || !newPassword || !confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields!",
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords do not match.!",
      });
      return;
    }

    try {
      const res = await axios.get(`http://localhost:3000/users?email=${email}`);
      if (res.data.length === 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email not found!",
        });
        return;
      }

      const user = res.data[0];

      await axios.patch(`http://localhost:3000/users/${user.id}`, {
        password: newPassword,
      });
      Swal.fire({
        title: "Password updated successfully!",
        icon: "success",
        draggable: true,
      });
      setEmail("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Error updating password:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <form onSubmit={(e) => e.preventDefault()} className="form">
        <h2>Reset Your Password</h2>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button onClick={handleUpdate}>Update Password</button>
      </form>
    </div>
  );
}
