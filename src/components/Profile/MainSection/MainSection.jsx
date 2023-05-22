import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAddressCard,
  faRightFromBracket,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";

import "./MainSection.css";

const MainSection = () => {
  return (
    <section>
      <div class="profile-section py-5">
        <div class="row">
          <div class="col-lg-12">
            <div class="card mb-4 ">
              <div class="card-body text-center">
                <img
                  src="../../../../avatar.webp"
                  alt="avatar"
                  className="img-rounded-circle img-fluid"
                />
              </div>
              <div className="edit-profile-button-position">
                <button class="my-3 edit-profile-button">
                  <span className="edit-profile-text">Edit Profile</span>
                  <FontAwesomeIcon
                   className="edit-profile-icon"
                    icon={faUserPen}
                  />{" "}
                </button>
              </div>
            </div>
            <div class="card mb-4 mb-lg-0 user-details">
              <div class="card-body p-0">
                <ul class="list-group list-group-flush rounded-3">
                  <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                    <FontAwesomeIcon icon={faUser} />
                    <p class="mb-0">Username</p>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                    <FontAwesomeIcon icon={faAddressCard} />
                    <p class="mb-0">Email</p>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    <p class="mb-0">Log Out</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
