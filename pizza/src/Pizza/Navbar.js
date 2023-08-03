import React from 'react'
import { Link, NavLink } from "react-router-dom";
import '../Style/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
    <ul className="navbar-nav">
 
      <li className="nav-item">
        <NavLink to={"/"} className="nav-link">
          Home
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink to={"/pizza"} className="nav-link">
          Pizzas
        </NavLink>
      </li>
      
      <li className="nav-item">
        <NavLink to={"/pizza/new"} className="nav-link">
          Add Pizza
        </NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar
