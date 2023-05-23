import React, { useState } from "react";
import "./AdminLogin.css";
import { useNavigate } from "react-router-dom";
import { HandleForm } from "../../useForm";
import axios from "../../axios";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [adminLoginState, setAdminLoginState] = HandleForm({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setError] = useState({});

  const validation = {
    username: /^[a-zA-Z0-9]{4,12}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedEmail = adminLoginState.email.trim();
    if (validation.email.test(trimmedEmail) === false) {
      setError({ email: "Invalid email" });
      return;
    }
    if (validation.password.test(adminLoginState.password) === false) {
      setError({ password: "Invalid password" });
      return;
    }
    try {
      const response = await axios.post("/admin/login", adminLoginState);
      const { token } = response.data;
      localStorage.setItem("admin", token);
      navigate('/admin')
    } catch (error) {
      setError({ general: error.response.data.message });
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-h2">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="login-label" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={adminLoginState.email}
              onChange={setAdminLoginState}
              id="email"
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>
          <div className="form-group">
            <label className="login-label" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={adminLoginState.password}
              onChange={setAdminLoginState}
              id="password"
            />
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>
          {errors.general && (
            <span className="error-message">{errors.general}</span>
          )}
          <div className="login-button-section">
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
