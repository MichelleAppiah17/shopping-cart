import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar';

function App() {
   fetch("https://fakestoreapi.com/products")
   .then((res) => res.json())
   .then((data) => {
    console.log(data);
   })
  return (
    <>
      <NavBar/>
    </>
  )
}

export default App
