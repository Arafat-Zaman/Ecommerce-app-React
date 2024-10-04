// src/components/ProductDetail.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { CartContext } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
