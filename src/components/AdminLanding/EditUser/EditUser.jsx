import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from '../../../axios'
import "./EditUser.css";
import jwtDecode from "jwt-decode";


const EditUser = () => {
   
  const navigate = useNavigate()

  useEffect(()=>{
    const token = localStorage.getItem("admin");
    if (token) {
      try {
        const tokenResponse = jwtDecode(token);
        if (tokenResponse) {
          const currentTime = Math.floor(Date.now() / 1000);
          if (+tokenResponse.exp < +currentTime) {
            localStorage.removeItem('admin')
            return navigate('/admin/edituser');
          }
        }
      } catch (error) {
        console.error("Error occurred during token verification", error);
      }
    }else{
      return navigate('/admin/login')
    }
  },[navigate])

  const {id,username,email} = useSelector((state)=>state.editUser)

  const [editUserState,setEditUserState] = useState({
      id:'',
      username:'',
      email:'',
  })

  useEffect(() => {
    setEditUserState({
      id:id,
      username:username,
      email:email
    })
  }, [id,username,email])
  
  const [errors,setError] = useState({})

  const validation = {
    username: /^[a-zA-Z0-9]{4,12}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  }

  const handleSubmit = async (e) => {
  e.preventDefault();

  const trimmedEmail = editUserState.email.trim();
  if (validation.email.test(trimmedEmail) === false) {
    setError({email: 'Invalid email' });
    return;
  }
  if (validation.email.test(editUserState.email) === false) {
    setError({ email: 'Invalid email' });
    return;
  }
  try{
    await axios.patch('/admin/edituser',editUserState)
    .then((response) => {
      setError({});
      const { token } = response.data;
      localStorage.setItem("token", token);
      navigate('/admin')
    })
  } catch (error) {
      setError({general:error.response.data.message})
   }
  };

  return (
    <div className="edituser-container">
      <div className="edituser-form">
        <h2 className="edituser-h2">Edit User</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label className="edituser-label" htmlFor="username">Username:</label>
            <input type="text" name='username'  value={editUserState.username} onChange={(e)=>setEditUserState({...editUserState,username:e.target.value})} id="username"  />
            {errors.username && <span className="error-message">{errors.username}</span>}
          </div>
          <div className="form-group">
            <label className="edituser-label" htmlFor="email">Email:</label>
            <input type="email" name='email'  value={editUserState.email}  onChange={(e)=>setEditUserState({...editUserState,email:e.target.value})} id="email"  />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          {errors.general && <span className="error-message">{errors.general}</span>}
          <div className="edituser-button-section">
          <button type="submit" className="edituser-button">
            Edit user
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
