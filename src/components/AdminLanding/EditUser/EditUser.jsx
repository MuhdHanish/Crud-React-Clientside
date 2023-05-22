import React from "react";

import "./EditUser.css";

const EditUser = () => {
  return (
    <>
      <div className="edituser-container">
        <div className="edituser-form">
          <h2 className="edituser-h2">edituser</h2>
          <form>
            <div className="form-group">
              <label className="edituser-label" htmlFor="email">
                Email:
              </label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label className="edituser-label" htmlFor="password">
                Password:
              </label>
              <input type="password" id="password" required />
            </div>
            <div className="edituser-button-section">
              <button type="submit" className="edituser-button">
                Edit User
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUser;
