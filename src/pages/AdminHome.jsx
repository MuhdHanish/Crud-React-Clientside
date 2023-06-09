import React, { useEffect } from 'react'

import AdminLanding from '../components/AdminLanding/AdminLanding'
import Navbar from '../components/Navbar/Navbar'
import jwtDecode from 'jwt-decode'
import { useNavigate } from 'react-router'

const AdminHome = () => {
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
            return navigate('/admin/login');
          }
        }
      } catch (error) {
        console.error("Error occurred during token verification", error);
      }
    }else{
      return navigate('/admin/login')
    }
  },[navigate])

  const details = {
   headerText:'Admin Home',
   linkText:'Log Out'
  }
  
  return (
    <>
    <Navbar details={details} />
    <AdminLanding/> 
    </>
  )
}

export default AdminHome