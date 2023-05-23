import React, { useEffect } from "react";

import MainTable from "./MainTable/MainTable";
import "./AdminLanding.css";
import jwtDecode from "jwt-decode";
import {  useNavigate } from "react-router";


function AdminLanding() {
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
  return (
    <>
      <MainTable/>
    </>
  );
}

export default AdminLanding
