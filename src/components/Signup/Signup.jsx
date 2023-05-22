import React from "react";
import "./Signup.css";

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2 className="signup-h2">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="signup-label" htmlFor="name">
              Name:
            </label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label className="signup-label" htmlFor="email">
              Email:
            </label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label className="signup-label" htmlFor="password">
              Password:
            </label>
            <input type="password" id="password" required />
          </div>
          <div className="signup-button-section">
          <button type="submit" className="signup-button">
            Signup
          </button>
          </div>
        </form>
        <p className="signup-form-text">Already have an account? <span className="signup-form-link">Log in</span></p>
      </div>
    </div>
  );
};

export default Signup;
