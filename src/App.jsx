import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemCards from './components/ItemCards';

function App() {
  const [products, setProducts] = useState([]);
  const [showItemCards, setShowItemCards] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <>
      <NavBar setShowItemCards={setShowItemCards} />
      {showItemCards &&<ItemCards products={products} />}
    </>
  );
}

export default App;

