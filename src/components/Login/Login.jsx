import React from "react";
import "./Login.css";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-h2">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="login-label" htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label className="login-label" htmlFor="password">Password:</label>
            <input type="password" id="password" required />
          </div>
          <div className="login-button-section">
          <button type="submit" className="login-button">
            Login
          </button>
          </div>
        </form>
        <p className="login-form-text">Don't have an account? <span className="login-form-link">Sign Up</span></p>
      </div>
    </div>
  );
};

export default Login;
