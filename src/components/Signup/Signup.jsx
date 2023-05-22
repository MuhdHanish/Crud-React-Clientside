import React, {useState } from "react";

import {HandleForm} from "../../useForm"
import {Link,useNavigate} from 'react-router-dom'
import axios from '../../axios'
import "./Signup.css";

const Signup = () => {
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

  if (validation.username.test(signupState.username) === false) {
    setError({username: 'Invalid username'});
    return;
  }
  if (validation.email.test(signupState.email) === false) {
    setError({email: 'Invalid email' });
    return;
  }
  if (validation.password.test(signupState.password) === false) {
    setError({ password: 'Invalid password' });
    return;
  }
  try{
    await axios.post('/signup',signupState)
    .then(() => {
      setError({});
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
            <input type="text" name='username' onChange={setSignupState} id="username"  />
            {errors.username && <span className="error-message">{errors.username}</span>}
          </div>
          <div className="form-group">
            <label className="signup-label" htmlFor="email">
              Email:
            </label>
            <input type="email" name='email' onChange={setSignupState} id="email"  />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label className="signup-label" htmlFor="password">
              Password:
            </label>
            <input type="password" name='password' onChange={setSignupState} id="password"  />
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
