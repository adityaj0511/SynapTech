import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    // Dummy Registered Users (Local Storage se check karega)
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    const userExists = registeredUsers.find((user) => user.email === email && user.password === password);

    if (!userExists) {
      setError("You need to sign up first.");
      setTimeout(() => {
        navigate("/signup"); // Redirect to Sign Up page
      }, 2000);
      return;
    }

    alert("Login successful!");

    // Store authentication status
    localStorage.setItem("isAuthenticated", "true");

    // Redirect to Home page
    navigate("/");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f3f4f6" }}>
      <div style={{ backgroundColor: "white", padding: "24px", borderRadius: "8px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", width: "400px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "600", textAlign: "center", marginBottom: "16px" }}>Sign In</h2>
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", color: "#374151" }}>Email</label>
            <input
              type="email"
              style={{ width: "100%", padding: "8px", border: "1px solid #d1d5db", borderRadius: "8px", marginTop: "4px" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", color: "#374151" }}>Password</label>
            <input
              type="password"
              style={{ width: "100%", padding: "8px", border: "1px solid #d1d5db", borderRadius: "8px", marginTop: "4px" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            style={{ width: "100%", backgroundColor: "#3b82f6", color: "white", padding: "10px", borderRadius: "8px", cursor: "pointer", transition: "background-color 0.3s" }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#2563eb"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#3b82f6"}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
