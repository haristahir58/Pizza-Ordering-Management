import React, { useState, useEffect,useContext } from 'react';
import { useCart } from './CartContext'; // Import the useCart hook
import { Link } from 'react-router-dom';
import '../Style/UserPizza.css';


const UserPizza = () => {
  const { dispatch } = useCart();
  const [pizza, setPizza] = useState([]);

  useEffect(() => {
    getPizza();
  }, []);

  const getPizza = async () => {
    let result = await fetch('/pizza');
    result = await result.json();
    setPizza(result);
  };

  const addToCart = (pizza) => {
    // Generate a unique ID for the cart item
    const uniqueId = generateUniqueId();

    // Dispatch the ADD_TO_CART action with the pizza item and unique ID
    dispatch({ type: 'ADD_TO_CART', payload: { ...pizza, id: uniqueId } });
  };

  // Function to generate a unique ID (you can use UUID or another method)
  const generateUniqueId = () => {
    // Implement your unique ID generation logic here (e.g., UUID)
    // For simplicity, you can use a random number for demonstration
    return Math.random().toString(36).substring(2, 15);
  };

  return (
    <>


          <div className="cardContainer1">
            {pizza.map((item) => (
              <div key={item._id} className="card1">
                <div className="cardImage">
              <img src={`http://localhost:5000/${item?.imageUrl}`} />
              </div>
                <div className="cardTitle1">
                  {item.title}
                </div>
                <div className="cardText">
                  {item.description}
                </div>

                <div className="cardText1">
                 Rs. {item.price}
                </div>
 
                <div className='btn5'>
                
                <button
              className="addToCartButton"
              onClick={() => addToCart(item)} // Call addToCart with the pizza item
              >Add to Cart
              </button> 
                </div>
              </div>
            ))}
          </div>

    </>
  );
};

export default UserPizza;
