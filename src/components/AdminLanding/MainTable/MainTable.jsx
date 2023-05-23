import React, { useEffect, useState } from "react";
import "./MainTable.css";
import { useNavigate } from "react-router-dom";
import axios from "../../../axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const MainTable = () => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUserList, setFilteredUserList] = useState([]);

  const getUser = async () => {
    await axios
      .get("/admin/getusers")
      .then((response) => {
        if (response.status === 200) {
          setUserList(response.data.users);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const filteredList = userList.filter((user) => {
      const usernameMatch = user.username
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const emailMatch = user.email
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return usernameMatch || emailMatch;
    });
    setFilteredUserList(filteredList);
  }, [searchQuery, userList]);

  const deleteUser = async (id) => {
    await axios
      .delete(`/admin/deleteuser/${id}`)
      .then((response) => {
        if (response.status === 200) {
          getUser();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUser();
    return () => {};
  }, []);

  return (
    <>
      <div className="button-search-position">
        <div className="col-lg-8 button-search">
          <div className="col-lg-4">
            <button
              className="add-user-button"
              onClick={() => navigate("/admin/adduser")}
            >
              Add User
            </button>
          </div>
          <div className="col-lg-4 d-flex">
            <input
              className="form-control me-2"
              type="text"
              placeholder="Search..."
              aria-label="Search"
              style={{ borderRadius: "25px" }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FontAwesomeIcon
              className="edit-profile-icon"
              icon={faSearch}
              style={{ position: "relative", top: "15px" }}
            />
          </div>
        </div>
      </div>
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
            {filteredUserList.map((user) => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td className="action-button">
                  <button
                    onClick={() => navigate(`/admin/edituser/${user._id}`)}
                  >
                    Edit
                  </button>
                  <button onClick={() => deleteUser(user._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MainTable;
