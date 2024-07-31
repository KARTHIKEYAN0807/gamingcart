import React from 'react';
import Product from './Product';

const ProductList = ({ products, addToCart, removeFromCart, cartItems }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <Product
          key={product.id}
          product={product}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          isInCart={cartItems.some(item => item.id === product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
