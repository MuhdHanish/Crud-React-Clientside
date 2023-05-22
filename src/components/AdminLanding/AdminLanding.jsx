import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./AdminLanding.css";
import AddUser from "./AddUser/AddUser";
import MainTable from "./MainTable/MainTable";

function AdminLanding() {
  return (
    <>
      <div className="button-search-position">
        <div className="col-lg-8 button-search">
          <div className="col-lg-4">
            <button
              className="add-user-button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
            >
              Add User
            </button>
          </div>
          <div className="col-lg-4 d-flex">
            <input
              class="form-control me-2"
              oninput="sendData(this)"
              type="search"
              placeholder="Search..."
              aria-label="Search"
              style={{ borderRadius: "25px" }}
            />
            <FontAwesomeIcon
              className="edit-profile-icon"
              icon={faSearch}
              style={{ position: "relative", top: "10px" }}
            />
          </div>
        </div>
      </div>

      <MainTable/>

      <div
        class="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div className="signup-container">
            <AddUser/>
        </div>
      </div>
      </div>
    </>
  );
}

export default AdminLanding
