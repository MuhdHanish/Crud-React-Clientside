import React, { useState } from "react";

import axios from '../../../axios'
import "./AddUser.css";
import { useNavigate } from "react-router-dom";
import { HandleForm } from "../../../useForm";

const AddUser = () => {
  const navigate = useNavigate()
  const [adduserState,setadduserState] = HandleForm({
     username:'',
     email:'',
     password:''
  })

  const [errors,setError] = useState({})

  const validation = {
    username: /^[a-zA-Z0-9]{4,12}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  }

  const handleSubmit = async (e) => {
  e.preventDefault();

  const trimmedUsername = adduserState.username.trim();
  if (validation.username.test(trimmedUsername)  === false) {
    setError({username: 'Invalid username'});
    return;
  }
  const trimmedEmail = adduserState.email.trim();
  if (validation.email.test(trimmedEmail) === false) {
    setError({email: 'Invalid email' });
    return;
  }
  if (validation.password.test(adduserState.password) === false) {
    setError({ password: 'Invalid password' });
    return;
  }
  try{
    await axios.post('/admin/adduser',adduserState)
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
    <div className="adduser-container">
      <div className="adduser-form">
        <h2 className="adduser-h2">Adduser</h2>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <div className="form-group">
            <label className="adduser-label" htmlFor="name">
              Name:
            </label>
            <input type="text" name='username' value={adduserState.username} onChange={setadduserState} id="username"  />
            {errors.username && <span className="error-message">{errors.username}</span>}
          </div>
          <div className="form-group">
            <label className="adduser-label" htmlFor="email">
              Email:
            </label>
            <input type="email" name='email' value={adduserState.email} onChange={setadduserState} id="email"  />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label className="adduser-label" htmlFor="password">
              Password:
            </label>
            <input type="password" name='password' value={adduserState.password} onChange={setadduserState} id="password"  />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          {errors.general && <span className="error-message">{errors.general}</span>}
          <div className="adduser-button-section">
          <button type="submit" className="adduser-button">
            Add User
          </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default AddUser;
