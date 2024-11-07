import React, { useState, useEffect } from "react";
import Products from "./Products";
import { Link } from 'react-router-dom';
import "./Products.css"
import axios from "axios";
import ReactPaginate from "react-paginate";
import Pagination from "react-js-pagination";

const CategoryComponent = () => {
  
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);




  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setCurrentPage(pageNumber);
  };

  // console.log(posts);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allProducts.slice(indexOfFirstPost, indexOfLastPost);




  
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products`);
        console.log(response.data.products);
        
      
        setAllProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching all products:", error);
      }
    };



    fetchAllProducts();
    
  }, []);


  return (
    <div>
  <div className="prod_header">
      <h2 className="Category_title"> PRODUCT LISTS</h2>
    
      <div className="pagination-background">
        <Pagination
          activePage={allProducts}
          itemsCountPerPage={postsPerPage}
          totalItemsCount={allProducts.length}
          pageRangeDisplayed={allProducts.length / postsPerPage}
          onChange={handlePageChange}
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
      </div>
   
      
      <div className="Container">
        <div className="Row">
          {currentPosts.map((product) => (
            <div className="column" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <Products
                  title={product.title}
                  image={product.images}
                  price={product.price}
                  
                />
              </Link>
            </div>
          ))}

    

    

        

      
        </div>
      </div>

    
      
    </div>
  );
};

export default CategoryComponent;
