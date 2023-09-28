import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/catalogo">About Project</Link>
    </div>
  )
}

export default NavBar
