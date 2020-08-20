import React from 'react'

import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Content feed</h1>
        <p>*server response time delayed by 1s to observe loading states</p>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Posts</Link>
            <Link to="/users">Users</Link>
          </div>
        </div>
      </section>
    </nav>
  )
}
