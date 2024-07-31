import React from 'react';

const Product = ({ product, addToCart, removeFromCart, isInCart }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} className="product-image fade-in" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
      {isInCart ? (
        <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
      ) : (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
};

export default Product;
