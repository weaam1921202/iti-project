import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./login.css";
import Swal from "sweetalert2";
import { UserContext } from "../../context/UserContext";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .get(`http://localhost:3000/users?email=${email}`)
      .then((response) => {
        if (response.data.length === 0) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "User not found, please register!",
          });
          navigate("/register");
        } else {
          const user = response.data[0];
          if (user.password === password) {
            localStorage.setItem("user", JSON.stringify(user));
            setUser(user);
            navigate("/");
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Wrong password!",
            });
          }
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        alert("Something went wrong.");
      });
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <p>
          <Link to="/Editpass">Forgot Password?</Link>
        </p>
        <p>
          <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}