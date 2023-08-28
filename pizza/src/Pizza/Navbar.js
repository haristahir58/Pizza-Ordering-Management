import React from 'react'
import { Link, NavLink } from "react-router-dom";
import '../Style/Navbar.css'
import { useCart } from './CartContext'; // Import the useCart hook

const Navbar = () => {
  const { cart } = useCart(); // Access the cart from the context
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

      <li className="nav-item">
  <Link to="/cart" className="nav-link">
    <i className="fa fa-shopping-cart" style={{
      fontSize: '24px',
      color: 'white',
      position: 'relative',
      display: 'inline-block',
      marginLeft: '10px',
    }}>
      {cart.length > 0 && (
        <span className={`cart-quantity ${cart.reduce((total, item) => total + item.quantity, 0) > 0 ? 'show' : ''}`}>
          {cart.reduce((total, item) => total + item.quantity, 0)}
        </span>
      )}
    </i>
  </Link>
</li>

    </ul>
  </nav>
  )
}

export default Navbar
