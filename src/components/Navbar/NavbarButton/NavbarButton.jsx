import React from 'react'

import{ useNavigate } from 'react-router-dom'

import "./NavbarButton.css"

const NavbarButton = ({linkText,link}) => {

  const navigate = useNavigate()

  return (
    <>
    <button className='navbar-button' onClick={()=>navigate(`/${link}`)}>{linkText}</button>
    </>
  )
}

export default NavbarButton