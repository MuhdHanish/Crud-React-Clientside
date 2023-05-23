import React, { useEffect } from 'react'

import Navbar from '../components/Navbar/Navbar'
import Landing from '../components/Landing/Landing'
import jwtDecode from 'jwt-decode'
import { useNavigate } from 'react-router'

const Home = () => {
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
  const details = {
    headerText:'Home',
    linkText: 'Go To Profile' 
  }
  return (
    <>
    <Navbar details={details}/>
    <Landing/>
    </>
  )
}

export default Home