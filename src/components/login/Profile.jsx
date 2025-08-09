import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { UserContext } from "../../context/UserContext";
import "./login.css";


export default function Profile() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    avatar: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        email: user.email || "",
        fullName: user.fullName || "",
        avatar: user.avatar || "",
      });
    }
  }, [user]);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setFormData((prev) => ({ ...prev, avatar: reader.result }));
    };

    if (file) reader.readAsDataURL(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const res = await axios.patch(
        `http://localhost:3000/users/${user.id}`,
        formData
      );
      setUser(res.data);
      Swal.fire("Saved!", "Your changes have been saved.", "success");
    } catch (error) {
      console.error("Error saving data:", error);
      Swal.fire("Error", "Something went wrong while saving", "error");
    }
  };

  const handleDeleteAccount = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      await axios.delete(`http://localhost:3000/users/${user.id}`);
      setUser(null);
      Swal.fire("Deleted!", "Your account has been deleted.", "success");
      navigate("/login");
    } catch (error) {
      console.error("Error deleting account:", error);
      Swal.fire("Error", "Something went wrong while deleting", "error");
    }
  };

  return (
    <div className="profile-container">
      <h2> Profile</h2>

      <div className="avatar-section">
        <img
          src={formData.avatar || ""}
          alt="User Avatar"
          className="avatar-img"
        />
        <input type="file" accept="image/*" onChange={handleAvatarChange} />
      </div>

      <div className="form-group">
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <button onClick={handleSave}>Save Changes</button>
      <button onClick={handleDeleteAccount} className="delete-btn">
        Delete Account
      </button>
    </div>
  );
}
