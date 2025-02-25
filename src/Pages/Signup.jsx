import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
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

    // Safely retrieve users from localStorage
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]");

    // Check if the user already exists
    if (registeredUsers.some((user) => user.email === email)) {
      setError("User already exists. Redirecting to Sign In...");
      setTimeout(() => navigate("/signin"), 2000);
      return;
    }

    // Save new user
    registeredUsers.push({ email, password });
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

    alert("Sign-up successful! Please sign in.");
    navigate("/signin");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f3f4f6" }}>
      <div style={{ backgroundColor: "white", padding: "24px", borderRadius: "8px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", width: "400px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "600", textAlign: "center", marginBottom: "16px" }}>Sign Up</h2>
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
            style={{ width: "100%", backgroundColor: "#10b981", color: "white", padding: "10px", borderRadius: "8px", cursor: "pointer" }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
