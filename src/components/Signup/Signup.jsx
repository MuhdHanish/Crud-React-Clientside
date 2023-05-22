import React, { useState } from "react";

import {HandleForm} from "../../useForm"
import {Link} from 'react-router-dom'
import axios from '../../axios'
import "./Signup.css";

const Signup = () => {

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

  const handleSubmit = async(e) => {
    e.preventDefault();
  
    if (validation.username.test(signupState.username) === false) {
      setError({ username: 'Invalid username' });
      return;
    }
    if (validation.email.test(signupState.email) === false) {
      setError({ email: 'Invalid email' });
      return;
    }
    if (validation.password.test(signupState.password) === false) {
      setError({ password: 'Invalid password' });
      return;
    }
    setError({})
    await axios.post('/signup',signupState).then((response)=>console.log(response))
  };
  

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2 className="signup-h2">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="signup-label" htmlFor="name">
              Name:
            </label>
            <input type="text" name='username' onChange={setSignupState} id="username" required />
            {errors.username && <span className="error-message">{errors.username}</span>}
          </div>
          <div className="form-group">
            <label className="signup-label" htmlFor="email">
              Email:
            </label>
            <input type="email" name='email' onChange={setSignupState} id="email" required />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label className="signup-label" htmlFor="password">
              Password:
            </label>
            <input type="password" name='password' onChange={setSignupState} id="password" required />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          <div className="signup-button-section">
          <button type="button" onClick={handleSubmit} className="signup-button">
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
