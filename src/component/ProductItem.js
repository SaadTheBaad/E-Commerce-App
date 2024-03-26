import React, { useReducer } from 'react';

const ProductItem = ({ product, addToCart }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_DETAILS':
        return { ...state, showDetails: !state.showDetails };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { showDetails: false });

  const toggleDetails = () => {
    dispatch({ type: 'TOGGLE_DETAILS' });
  };

  return (
    <div className="product-item" onMouseEnter={toggleDetails} onMouseLeave={toggleDetails}>
      <img src={product.image} alt={product.name} height="150px" width="150px" />
      <h3>{product.name}</h3>
      <p>{state.showDetails && product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
