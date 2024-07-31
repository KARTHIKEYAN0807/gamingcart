import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    alert('Proceeding to checkout!');
    // You can add more checkout logic here, such as redirecting to a payment page
  };

  return (
    <div className="cart">
      <h2>Shopping Cart ({cartItems.length})</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
          ))}
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
