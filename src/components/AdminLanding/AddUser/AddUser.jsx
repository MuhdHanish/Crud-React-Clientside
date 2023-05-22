import React from "react";

import "./AddUser.css";

const AddUser = () => {
  return (
    <>
      <div className="adduser-form">
        <h2 className="adduser-h2">Add User</h2>
        <form>
          <div className="form-group">
            <label className="adduser-label" htmlFor="name">
              Name:
            </label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label className="adduser-label" htmlFor="email">
              Email:
            </label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label className="adduser-label" htmlFor="password">
              Password:
            </label>
            <input type="password" id="password" required />
          </div>
          <div className="adduser-button-section">
            <button type="submit" className="adduser-button">
              Add User
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddUser;
