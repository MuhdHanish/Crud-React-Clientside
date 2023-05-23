import React, { useEffect } from 'react'
import Login from '../components/Login/Login'
import { useNavigate } from 'react-router';
import jwtDecode from 'jwt-decode';

const LoginPage = () => {
  const navigate = useNavigate()
 useEffect(() => {
  const token = localStorage.getItem("user");
  if (token) {
    try {
      const tokenResponse = jwtDecode(token);
      if (tokenResponse) {
        const currentTime = Math.floor(Date.now() / 1000);
        if (+tokenResponse.exp > +currentTime) {
          return navigate('/');
        }
      }
    } catch (error) {
      console.error("Error occurred during token verification", error);
    }
  }
}, [navigate]);
  return (
    <>
    <Login/>
    </>
  )
}

export default LoginPage