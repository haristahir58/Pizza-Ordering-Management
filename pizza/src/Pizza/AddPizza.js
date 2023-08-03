import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/AddPizza.css'

const AddPizza = () => {
    const navigate = useNavigate();

    const [pizza, setPizza] = useState({
        title: "",
        imageUrl: "",
        description: "",
        price: "",
    });
    const [image, setImage] = useState('');

    const handleInput = (e) => {
        const { name, value } = e.target;
        setPizza((prevPizza) => ({
            ...prevPizza,
            [name]: value,
        }));
    };

    const PostData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', pizza.title);
        formData.append('image', image);
        formData.append('description', pizza.description);
        formData.append('price', pizza.price);

        const res = await fetch("/pizza/new", {
            method: "POST",
            body: formData, // Correct the fetch options
        });

        const data = await res.json();
        if (res.status === 422 || !data) {
            window.alert("Invalid Pizza");
            console.log("Invalid Pizza");
        } else {
            window.alert("Pizza Submission Successful");
            console.log("Pizza Submission Successful");
            navigate("/");
        }
    };

    return (
        <>
            <div>
                <form onSubmit={PostData}>
                <div className="formInput">
                    <label>
                        Title:
                        <input
                            type="text"
                            placeholder="Enter Pizza Title"
                            name="title"
                            value={pizza.title}
                            id="title"
                            onChange={handleInput}
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
                            id="description"
                            onChange={handleInput}
                        />
                    </label>
                    </div>

                    <div className="formInput">
                    <label>
                        Price:
                        <input
                            type="number"
                            placeholder="Enter Pizza Price"
                            name="price" // Correct the name attribute to "price"
                            value={pizza.price}
                            id="price"
                            onChange={handleInput}
                        />
                    </label>
                    </div>

                    <input type="submit" name='send' id='send' value={"Send"} className="button"
                            onClick={PostData}
                            /> 
                </form>
            </div>
        </>
    );
};

export default AddPizza;
