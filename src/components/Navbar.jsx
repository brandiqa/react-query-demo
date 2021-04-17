import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <div>React Query Demo</div>
      <div>
        <Link to="/">Basic</Link>
        <Link to="/paginated">Paginated</Link>
        <Link to="/infinite">Infinite</Link>
      </div>
    </nav>
  )
}

export default Navbar
