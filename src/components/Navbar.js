// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h2>E-Commerce App</h2>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
};

export default Navbar;
