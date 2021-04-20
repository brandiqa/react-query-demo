import React from 'react'
import { NavLink } from 'react-router-dom'

import './navbar.css'

function Navbar() {
  return (
    <nav className="container flex justify-between p-4 mx-auto lg:w-screen-lg">
      <div>
        <img src="/logo.svg" alt="React Query" width="200" />
      </div>
      <div className="flex">
        <NavLink to="/" exact>
          Basic
        </NavLink>
        <NavLink to="/paginated">Paginated</NavLink>
        <NavLink to="/infinite">Infinite</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
