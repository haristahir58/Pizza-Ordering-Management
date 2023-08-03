import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Style/UserPizza.css';


const UserPizza = () => {
  const [pizza, setPizza] = useState([]);

  useEffect(() => {
    getPizza();
  }, []);

  const getPizza = async () => {
    let result = await fetch('/pizza');
    result = await result.json();
    setPizza(result);
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
                  <button className="addToCartButton">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

    </>
  );
};

export default UserPizza;
