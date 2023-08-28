// CartContext.js

import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
  
        if (existingItemIndex !== -1) {
          // If the item is already in the cart, create a new array with updated quantity
          const updatedCart = state.cart.map((item, index) => {
            if (index === existingItemIndex) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          });
  
          return { ...state, cart: updatedCart };
        } else {
          // If the item is not in the cart, add it to the cart
          return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
        }
      case 'REMOVE_FROM_CART':
        const updatedCart = state.cart.filter(item => item.id !== action.payload.id);
        return { ...state, cart: updatedCart };
      case 'CLEAR_CART':
        return { ...state, cart: [] };
      default:
        return state;
    }
  };
  

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
