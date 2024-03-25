import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';

const Productpage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity++;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    ).filter((cartItem) => cartItem.quantity > 0);

    setCart(updatedCart);
  };

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const cartSectionStyle = {
    display: 'flex',
    flexDirection: 'column', // Stack items vertically
    alignItems: cart.length > 0 ? 'flex-start' : 'flex-end', // Align items to the start of the container when there are items, to the end when empty
    flex: 1,
    marginRight: 'auto', // Always apply margin to push the cart towards the center or right depending on the content
  };

  return (
    <div className="product-page">
      <Header />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: cart.length > 0 ? 1 : 0, transition: 'flex 0.3s' }}> {/* Allow the product list to expand when the cart is empty */}
          <ProductList addToCart={addToCart} />
        </div>
        <div style={cartSectionStyle}>
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Productpage;