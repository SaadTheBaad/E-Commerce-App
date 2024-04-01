import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from backend API endpoint
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array to run effect only once on component mount

  return (
    <div className="product-list">
      {products.map(({ id, ...product }) => (
        <ProductItem key={id} product={{ id, ...product }} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
