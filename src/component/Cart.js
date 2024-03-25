import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
      <p>Total (In cart): ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
    </div>
  );
};

export default Cart;