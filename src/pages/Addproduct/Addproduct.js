import React, { useState } from "react";

import { connect } from "react-redux";
import * as actions from "../../store/actions";

const Addproduct = ({ addProduct }) => {
  const [images, setImages] = useState([]);

  const  [ product, setProduct ] = useState({
    name: "",
    category: "",
    quantity: 0,
    description: "",
    images
  });

  const handleImageChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
        const newImage = e.target.files[i];
        newImage["id"] = Math.random();
     // add an "id" property to each File object
        setImages((prevState) => [...prevState, newImage]);
        setProduct({
            ...product,
            images: [...product.images, newImage]
        })
      }

     

  };

  console.log(product);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct({
        ...product,
        [name]: value
    })
    
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // product.images = images
    await addProduct(product);
    
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={handleChange}
          value={product.name}
        />
        <input
          type="text"
          name="category"
          placeholder="category"
          onChange={handleChange}
          value={product.category}
        />
        <input
          type="text"
          name="quantity"
          placeholder="quantity"
          onChange={handleChange}
          value={product.quantity}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          onChange={handleChange}
          value={product.description}
        />
        <input type="file" multiple onChange={handleImageChange} />
        <button type="submit"></button>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (newProduct) => dispatch(actions.addProduct(newProduct)),
  };
};
export default connect(null, mapDispatchToProps)(Addproduct);
