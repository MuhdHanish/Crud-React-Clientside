import jwtDecode from 'jwt-decode';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import Profile from '../components/Profile/Profile';

const ProfilePage = () => {
 const navigate = useNavigate()
 useEffect(() => {
  const token = localStorage.getItem("user");
  if (token) {
    try {
      const tokenResponse = jwtDecode(token);
      if (tokenResponse) {
        const currentTime = Math.floor(Date.now() / 1000);
        if (+tokenResponse.exp < +currentTime) {
          return navigate('/login');
        }
      }
    } catch (error) {
      console.error("Error occurred during token verification", error);
    }
  }else{
   return navigate('/login')
  }
}, [navigate]);
  return (
    <>
    <Profile/>
    </>
  )
}

export default ProfilePage