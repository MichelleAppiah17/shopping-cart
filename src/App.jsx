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
  const [itemsInCart, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <Cart visibility={cartVisibility} products={itemsInCart}/>
      <div className="navBar">
        <div className="boutiqueName">
          <h1>Chic Boutique</h1>
        </div>
        <input placeholder="search" />
        <div className="navBarButtons">
          <HomeButton
            setBackgroundImage={setBackgroundImage}
           />
          <StoreButton
            setShowItemCards={setShowItemCards}
            setBackgroundWhite={setBackgroundWhite}
          />
          <div>
            <button onClick={() => setCartVisible(true)}>cart</button>
          </div>
        </div>
      </div>

      {showItemCards && (
        <div className="itemCards">
          <ItemCards products={products} />
        </div>
      )}
    </div>
  );
}

export default App;



