import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';

const ProductPage = () => {
  const [shoppingCart, setShoppingCart] = useState([]);

  const addToCart = (product) => {
    const existingItemIndex = shoppingCart.findIndex((item) => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...shoppingCart];
      updatedCart[existingItemIndex].quantity++;
      setShoppingCart(updatedCart);
    } else {
      setShoppingCart([...shoppingCart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = shoppingCart.map((cartItem) =>
      cartItem.id === product.id && cartItem.quantity > 0
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    ).filter((cartItem) => cartItem.quantity > 0);
  
    setShoppingCart(updatedCart);
  };
  

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setShoppingCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  const cartSectionStyle = {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: shoppingCart.length > 0 ? 'flex-start' : 'flex-end',
    flex: 1,
    marginRight: 'auto', 
  };

  return (
    <div className="product-page">
      <Header />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: shoppingCart.length > 0 ? 1 : 0}}> 
          <ProductList addToCart={addToCart} />
        </div>
        <div style={cartSectionStyle}>
          <Cart cart={shoppingCart} removeFromCart={removeFromCart} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
