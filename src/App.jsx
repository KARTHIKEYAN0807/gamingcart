import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import './App.css';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Call of Duty: Modern Warfare 3', description: 'First-person shooter game.', price: 59.99, image: 'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/mw3/overview/Store_GamesPDP_Hero01.png' },
    { id: 2, name: 'Call of Duty: Modern Warfare 2', description: 'First-person shooter game.', price: 49.99, image: 'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/mw2/overview/CORTEZ_KA_FINISH_BLEED_BRANDED_CL_16x9_051722_01.webp' },
    { id: 3, name: 'Call of Duty: Black Ops 6', description: 'First-person shooter game.', price: 39.99, image: 'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/bo6/BO6-REVEAL-TOUT.jpg' },
    { id: 4, name: 'Call of Duty: Black Ops Cold War', description: 'First-person shooter game.', price: 69.99, image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1985810/header.jpg?t=1686345977' },
    { id: 5, name: 'Call of Duty: Warzone', description: 'Battle Royale game,First-person shooter game.', price: 0.00, image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1962663/header.jpg?t=1721859504' },
    { id: 6, name: 'Call of Duty: Vanguard', description: 'First-person shooter game.', price: 59.99, image: 'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/vanguard/overview/VanguardPDP_Hero.png' },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = product => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = id => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="app">
      <h1>Shopping Cart ({cartItems.length})</h1>
      <div className="main-content">
        <ProductList 
          products={products} 
          addToCart={addToCart} 
          removeFromCart={removeFromCart} 
          cartItems={cartItems}
        />
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
};

export default App;
