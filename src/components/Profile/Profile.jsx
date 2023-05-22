import React from 'react'
import Navbar from '../Navbar/Navbar'
import MainSection from './MainSection/MainSection'


const Profile = () => {
  const details = {
    headerText:'Profile',
    linkText:'Go To Home',
    link:''
  }
  return (
    <>
    <Navbar details={details}/>
    <MainSection/>
    </>
  )
}

export default Profile