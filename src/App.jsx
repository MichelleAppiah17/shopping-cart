import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import HomeButton from './components/Home';
import StoreButton from './components/Store';
import ItemCards from './components/ItemCards';
import Cart from './components/Cart';

function App() {
  const [products, setProducts] = useState([]);
  const [showItemCards, setShowItemCards] = useState(false);
  const [backgroundWhite, setBackgroundWhite] = useState(false);
  const [isBackgroundImage, setBackgroundImage] = useState(false);
  const [cartVisibility, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]); 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const addToCart = (product) => {
    const newItem = { ...product, count: 1 }; 
    setCartItems([...cartItems, newItem]);
  };

  const removeProduct = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const quantityChange = (productId, newQuantity) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === productId) {
        item.count = parseInt(newQuantity, 10);
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  return (
    <div>
      <Cart
        visibility={cartVisibility}
        products={cartItems}
        onClose={() => setCartVisible(false)}
        removeProduct={removeProduct}
        quantityChange={quantityChange} 
      />
      <div className="navBar">
        <div className="boutiqueName">
          <h1>Chic Boutique</h1>
        </div>
        <input placeholder="search" />
        <div className="navBarButtons">
          <HomeButton setBackgroundImage={setBackgroundImage} />
          <StoreButton
            setShowItemCards={setShowItemCards}
            setBackgroundWhite={setBackgroundWhite}
          />
          <div>
            <button onClick={() => setCartVisible(true)}>
              cart
              {cartItems.length > 0 && (
                <span className='itemCount'>{cartItems.length}</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {showItemCards && (
        <div className="itemCards">
          <ItemCards products={products} addToCart={addToCart} />
        </div>
      )}
    </div>
  );
}

export default App;




