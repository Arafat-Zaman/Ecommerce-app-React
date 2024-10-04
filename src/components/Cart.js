// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
          ))}
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default Cart;
