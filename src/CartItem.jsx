import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item fade-in">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p>${item.price.toFixed(2)}</p>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
