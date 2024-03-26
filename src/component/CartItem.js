import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  const handleRemove = () => {
    removeFromCart(item);
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} width="150px" height="150px" />
      <div>
        <h3>{item.name}</h3>
        <p>Quantity: {item.quantity}</p>
        <p>Price: ${item.price}</p>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
