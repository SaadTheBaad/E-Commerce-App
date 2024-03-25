import React, { useState } from 'react';

const ProductItem = ({ product, addToCart }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="product-item" onMouseEnter={toggleDetails} onMouseLeave={toggleDetails}>
      <img src={product.image} alt={product.name} height= "200px" width="200px" />
      <h3>{product.name}</h3>
      <p>{showDetails && product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;