import React from "react";
import axios from "../../../axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAddressCard, faRightFromBracket, faUserPen } from "@fortawesome/free-solid-svg-icons";
import "./MainSection.css";
import { useDispatch, useSelector } from "react-redux";
import { setUserProfile } from "../../../redux/User/userProfileSlice";

const MainSection = () => {
  const { id, username, email ,image} = useSelector((state) => state.userProfile);

  const dispatch=useDispatch()
  const handleImageUpload = async (event) => {
    event.preventDefault()
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    formData.append("userId",id)

    try {
      await axios.post("/upload-profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((response)=>{
        console.log(response.data)
        dispatch(setUserProfile({
          id:id,
          username:username,
          email:email,
          image:response.data.imageUrl
        }))
      })
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  console.log(image)
  return (
    <section>
      <div className="profile-section py-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src={image ? `/images/${image}` : "../../../../avatar.webp"}
                  alt="avatar"
                  style={{width:'150px',height:'150px'}}
                  className="img-rounded-circle img-fluid"
                />
              </div>
              <div className="edit-profile-button-position">
                <label htmlFor="image-upload" className="my-3 edit-profile-button">
                  <span className="edit-profile-text">Edit Image</span>
                  <FontAwesomeIcon className="edit-profile-icon" icon={faUserPen} />
                </label>
                <input
                  id="image-upload"
                  type="file"
                  accept=".jpg, .jpeg, .png, .gif, .pdf"
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                />
              </div>
            </div>
            <div className="card mb-4 mb-lg-0 user-details">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <FontAwesomeIcon icon={faUser} color="" />
                    <p className="mb-0">{username}</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <FontAwesomeIcon icon={faAddressCard} />
                    <p className="mb-0">{email}</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <FontAwesomeIcon icon={faRightFromBracket} color="red" />
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
