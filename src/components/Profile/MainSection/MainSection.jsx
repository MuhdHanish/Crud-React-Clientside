import React, { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAddressCard,
  faRightFromBracket,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";

import "./MainSection.css";

const MainSection = () => {
  useEffect(() => {
   
    return () => {
    }
  }, [])
  
  return (
    <section>
      <div className="profile-section py-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="card mb-4 ">
              <div className="card-body text-center">
                <img
                  src="../../../../avatar.webp"
                  alt="avatar"
                  className="img-rounded-circle img-fluid"
                />
              </div>
              <div className="edit-profile-button-position">
                <button className="my-3 edit-profile-button">
                  <span className="edit-profile-text">Edit Image</span>
                  <FontAwesomeIcon
                   className="edit-profile-icon"
                    icon={faUserPen}
                  />{" "}
                </button>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0 user-details">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <FontAwesomeIcon icon={faUser} />
                    <p className="mb-0">Username</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <FontAwesomeIcon icon={faAddressCard} />
                    <p className="mb-0">Email</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    <p className="mb-0">Log Out</p>
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
