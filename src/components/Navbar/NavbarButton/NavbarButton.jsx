import React from 'react'

import{ useNavigate } from 'react-router-dom'
import { baseUrl } from '../../../constance'
import "./NavbarButton.css"

const NavbarButton = ({linkText}) => {
  
  const navigate = useNavigate()
  const handleLink = (linkText) =>{
    if(linkText==='Log Out'){
      localStorage.removeItem('admin')
      navigate(`/admin/login`)
    }else{
      navigate(`/profile`)
    }
  }

  return (
    <>
    <button className='navbar-button' onClick={()=>handleLink(linkText)}>{linkText}</button>
    </>
  )
}

export default NavbarButton