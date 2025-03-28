import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'


const Navbar = () => {
  return (
    <div className='navbar'> 
        <img src={navlogo} alt="" classname="nav-logo" />
        <img src={navProfile} alt="" classname="nav-logo" />
    </div>
  )
}

export default Navbar
