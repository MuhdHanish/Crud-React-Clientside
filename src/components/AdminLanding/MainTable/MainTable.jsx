import React from "react";

import "./MainTable.css";
import EditUser from "../EditUser/EditUser";

const MainTable = () => {
  return (
    <>
      <div className="table-postion">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>JohnDoe</td>
              <td>johndoe@example.com</td>
              <td className="action-button">
                <button data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Edit
                </button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>JaneSmith</td>
              <td>janesmith@example.com</td>
              <td className="action-button">
                <button data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Edit
                </button>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div className="signup-container">
            <EditUser />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainTable;
