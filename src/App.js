// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product/:id" element={<ProductPage />} />
    <Route path="/cart" element={<Cart />} />
  </Routes>
</Router>
    </CartProvider>
  );
};

export default App;
