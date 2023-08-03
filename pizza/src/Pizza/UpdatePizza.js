import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/AddPizza.css'
import { useParams } from 'react-router-dom';

const UpdatePizza = () => {
  const navigate = useNavigate();

  const [pizza, setPizza] = useState({
    title: "",
    imageUrl: "",
    description: "",
    price: "",
  });
  const [image, setImage] = useState('');

  const params = useParams();

  useEffect(() => {
    getPizzaDetails();
  }, [])

  const getPizzaDetails = async () => {
    console.log(params)
    let result = await fetch(`/pizza/${params.id}`)
    result = await result.json();
    console.log(result)
    setPizza({
      ...pizza,
      title: result.title,
      imageUrl: result.imageUrl,
      description: result.description,
      price: result.price,
    });
  }

  const handleInput = (e) => {
    const { name, value } = e.target;
    setPizza((prevPizza) => ({
      ...prevPizza,
      [name]: value,
    }));
  };

  const UpdateData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', pizza.title);
    formData.append('image', image);
    formData.append('description', pizza.description);
    formData.append('price', pizza.price);

    const res = await fetch(`/pizza/${params.id}`, {
      method: "PUT",
      body: formData, // Correct the fetch options
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid Pizza");
      console.log("Invalid Pizza");
    } else {
      window.alert("Pizza Updation Successful");
      console.log("Pizza Updation Successful");
      navigate("/");
    }
  };

  return (
    <>
      <div>
        <form onSubmit={UpdateData}>
          <div className="formInput">
            <label>
              Title:
              <input
                type="text"
                placeholder="Enter Pizza Title"
                name="title"
                value={pizza.title}
                onChange={handleInput} // Update the onChange function here
              />
            </label>
          </div>

          <div className="formInput">
            <label>
              Image:
              <input type="file" name="image" onChange={(e) => setImage(e.target.files[0])} />
            </label>
          </div>

          <div className="formInput">
            <label>
              Description:
              <input
                type="text"
                placeholder="Enter Pizza Description"
                name="description"
                value={pizza.description}
                onChange={handleInput} // Update the onChange function here
              />
            </label>
          </div>

          <div className="formInput">
            <label>
              Price:
              <input
                type="number"
                placeholder="Enter Pizza Price"
                name="price"
                value={pizza.price}
                onChange={handleInput} // Update the onChange function here
              />
            </label>
          </div>

          <input
            type="submit"
            name="send"
            id="send"
            value={"Update"}
            className="button"
            onClick={UpdateData}
          />
        </form>
      </div>
    </>
  );
};

export default UpdatePizza;
