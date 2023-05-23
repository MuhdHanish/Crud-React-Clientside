import React, {useState } from "react";

import {HandleForm} from "../../useForm"
import {Link,useNavigate} from 'react-router-dom'
import axios from '../../axios'
import "./Signup.css";

import { useDispatch } from "react-redux";
import { setUserProfile } from "../../redux/User/userProfileSlice";

const Signup = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const [signupState,setSignupState] = HandleForm({
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
  const trimmedUsername = signupState.username.trim();
  if (validation.username.test(trimmedUsername)  === false) {
    setError({username: 'Invalid username'});
    return;
  }
  const trimmedEmail = signupState.email.trim();
  if (validation.email.test(trimmedEmail) === false) {
    setError({email: 'Invalid email' });
    return;
  }
  if (validation.password.test(signupState.password) === false) {
    setError({ password: 'Invalid password' });
    return;
  }
  try{
    await axios.post('/signup',signupState)
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
    <div className="signup-container">
      <div className="signup-form">
        <h2 className="signup-h2">Signup</h2>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <div className="form-group">
            <label className="signup-label" htmlFor="name">
              Name:
            </label>
            <input type="text" name='username' value={signupState.username} onChange={setSignupState} id="username"  />
            {errors.username && <span className="error-message">{errors.username}</span>}
          </div>
          <div className="form-group">
            <label className="signup-label" htmlFor="email">
              Email:
            </label>
            <input type="email" name='email' value={signupState.email} onChange={setSignupState} id="email"  />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label className="signup-label" htmlFor="password">
              Password:
            </label>
            <input type="password" name='password' value={signupState.password} onChange={setSignupState} id="password"  />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          {errors.general && <span className="error-message">{errors.general}</span>}
          <div className="signup-button-section">
          <button type="submit" className="signup-button">
            Signup
          </button>
          </div>
        </form>
        <p className="signup-form-text">Already have an account? <Link to='/login'className="signup-form-link" >Log in</Link></p>
      </div>
    </div>
  );
};

export default Signup;
