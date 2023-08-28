// Cart.js

import React from 'react';
import { useCart } from './CartContext';
import '../Style/Cart.css'; // Import your CSS file for styling

const Cart = () => {
  const { cart, dispatch } = useCart();

  // Function to remove an item from the cart
  const removeFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item._id} className="cart-item">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <span className="cart-item-title">{item.title}</span>
              <span className="cart-item-price">${item.price}</span>
              <span className="cart-item-quantity">Quantity: {item.quantity}</span>
            </div>
            <button
              onClick={() => removeFromCart(item)}
              className="cart-item-remove-button"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
