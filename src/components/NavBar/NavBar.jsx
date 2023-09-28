import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'
const NavBar = () => {
  return (
    <div className='nav-container'>
      <Link className='item-nav' to="/">Home</Link>
      <Link className='item-nav' to="/about">About Project</Link>
    </div>
  )
}

export default NavBar
