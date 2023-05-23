import React, {  useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import "./Login.css";
import { HandleForm } from "../../useForm";
import axios from "../../axios";
import { useDispatch } from "react-redux";
import { setUserProfile } from "../../redux/User/userProfileSlice";

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loginState,setLoginState] = HandleForm({
     username:'',
     email:'',
     password:''
  })
  
  const [errors,setError] = useState({})

  const validation = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  }

  const handleSubmit = async (e) => {
  e.preventDefault();

  const trimmedEmail = loginState.email.trim();
  if (validation.email.test(trimmedEmail) === false) {
    setError({email: 'Invalid email' });
    return;
  }
  if (validation.password.test(loginState.password) === false) {
    setError({ password: 'Invalid password' });
    return;
  }
  try{
    await axios.post('/login',loginState)
    .then((response) => {
      setError({});
      const { token,user } = response.data;
      localStorage.setItem("user", token);
      dispatch(setUserProfile({
        id:user.id,
        username:user.username,
        email:user.email,
        image:user.image}))
      navigate('/')
    })
  } catch (error) {
      setError({general:error.response.data.message})
   }
  };


  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-h2">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="login-label" htmlFor="email">Email:</label>
            <input type="email" name='email'  value={loginState.email} onChange={setLoginState} id="email"  />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label className="login-label" htmlFor="password">Password:</label>
            <input type="password" name='password' value={loginState.password} onChange={setLoginState} id="password"  />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          {errors.general && <span className="error-message">{errors.general}</span>}
          <div className="login-button-section">
          <button type="submit" className="login-button">
            Login
          </button>
          </div>
        </form>
        <p className="login-form-text">Don't have an account?<Link to='/signup' className="login-form-link"> Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login;
