import React from 'react'

import Navbar from '../components/Navbar/Navbar'
import Landing from '../components/Landing/Landing'

const Home = () => {
  const details = {
    headerText:'Home',
    linkText: 'Go To Profile' ,
    link:'profile'
  }
  return (
    <>
    <Navbar details={details}/>
    <Landing/>
    </>
  )
}

export default Home