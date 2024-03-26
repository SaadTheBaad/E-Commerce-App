import React from 'react';
import ProductItem from './ProductItem';
import product from '../data/product';

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      {product.map(({ id, ...product }) => (
        <ProductItem key={id} product={{ id, ...product }} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
