// src/pages/Home.js
import React from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Our E-Commerce Store</h1>
      <ProductList />
    </div>
  );
};

export default Home;
