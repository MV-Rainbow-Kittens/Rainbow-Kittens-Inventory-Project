import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import "../css/Navbar.css"

function Navbar() {
    return (
      <nav className="nav">
        <Link to="/" className="site-title">
          Site Name
        </Link>
        <ul>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/search">Search</CustomLink>
            <CustomLink to="/admin">Admin</CustomLink>
        </ul>
      </nav>
    )
  }
  
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }

export default Navbar