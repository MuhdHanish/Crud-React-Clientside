import React from "react";
import "./AdminLogin.css";

const AdminLogin = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
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
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label className="login-label" htmlFor="password">
              Password:
            </label>
            <input type="password" id="password" required />
          </div>
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
