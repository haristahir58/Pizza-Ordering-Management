import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Style/ManagePizza.css'
import { useNavigate } from 'react-router-dom';

const ManagePizza = () => {
  const navigate = useNavigate();

  const [pizza, setPizza] = useState([]);
 
  useEffect(() => {
    getPizza();

  }, []);

  const getPizza = async () => {
    let result = await fetch('/pizza');
    result = await result.json();
    setPizza(result);
  };

  const deletePizza = async (id) => {
    let result = await fetch(`/pizza/${id}`, {
      method: 'Delete',
    });

    if (result.status === 200) {
      window.alert('Pizza is Deleted');
      navigate('/');
    } else {
      console.log('Error deleting Pizza');
    }
  };

  
  return (
    <>
      <div className="list">
        <div className="listContainer">

          <div className="productTableTitle">
            Pizza
            <Link to="/pizza/new" style={{ textDecoration: 'none' }} className="newLink">
              Add New Pizza
            </Link>
          </div>
          <div className="tableContainer">
            <table className="table">
              <thead>
                <tr>
                  <th className="tableCell">Pizza ID</th>
                  <th className="tableCell">Title</th>
                  {/* <th className="tableCell">Image</th> */}
                  <th className="tableCell">Description</th>
                  <th className="tableCell">Price</th>
                  <th className="tableCell">Operations</th>
                </tr>
              </thead>
              <tbody>
                {pizza.map((item, index) => (
                  <tr key={item._id}>
                    <td className="tableCell">{index}</td>
                    <td className="tableCell2">{item.title}<img src={`http://localhost:5000/${item?.imageUrl}`} /></td>
                    {/* <td className="tableCell"></td> */}
                    {console.log(`http://localhost:5000/${item?.imageUrl}`)}
                    <td className="tableCell">{item.description}</td>
                    <td className="tableCell">{item.price}</td>
                    <td className="tableCell">
                      <div className="deleteButton" onClick={() => deletePizza(item._id)}>
                        Delete
                      </div>
                      <Link to={`/pizza/${item._id}`} className="buttonLink">
                        Update
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </>
  );
};

export default ManagePizza;