import React from 'react'

import AdminLanding from '../components/AdminLanding/AdminLanding'
import Navbar from '../components/Navbar/Navbar'

const AdminHome = () => {
  const details = {
   headerText:'Admin Home',
   linkText:'Log Out',
   link:'/admin/login'
  }
  return (
    <>
    <Navbar details={details} />
    <AdminLanding/> 
    </>
  )
}

export default AdminHome