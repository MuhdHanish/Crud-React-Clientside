import React, { useEffect } from 'react'
import AdminLogin from '../components/AdminLogin/AdminLogin'
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router';

const AdminLoginPage = () => {
 const navigate = useNavigate()
 useEffect(() => {
  const token = localStorage.getItem("admin");
  if (token) {
    try {
      const tokenResponse = jwtDecode(token);
      if (tokenResponse) {
        const currentTime = Math.floor(Date.now() / 1000);
        if (+tokenResponse.exp > +currentTime) {
          return navigate('/admin');
        }
      }
    } catch (error) {
      console.error("Error occurred during token verification", error);
    }
  }
}, [navigate]);
  return (
    <>
    <AdminLogin/>
    </>
  )
}

export default AdminLoginPage