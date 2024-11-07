import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/action";

import "./SingleProduct.css"
import axios from 'axios';
const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  console.log(id, 'hey');

// const fetchdata = async() => {
//   const response = await axios.get(`https://eyebrowapi.softbenz.com.np/api/product/latest/${_id}`);
//   console.log(response);
  
// }
// fetchdata();
  
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      console.log(response.data);
      
      
      setProduct(response.data);
    };

    fetchProduct();
  }, [id]);

  
  return (
    <>
 

    <div className="Product-card">
      <div className="Product-Img">
      <img src={product.images} alt={product.title} />
      </div>
      <div className="Product-Details">
      <h2>{product.title} </h2>
      <p id="Product-description">{product.description}</p>
      <p id="Product-price">${product.price}</p>
      <button onClick={() => addProduct(product)}>Add To Cart</button>
      </div>
    </div> 
    
    </>
  );
};

export default SingleProduct;
