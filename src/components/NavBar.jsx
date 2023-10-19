import React from 'react';
import HomeButton from './Home';
import StoreButton from './Store';

function NavBar({ setShowItemCards, setBackgroundWhite, isBackgroundWhite }) {
  return (
    <div className="navBar">
      <div className="boutiqueName">
        <h1>Chic Boutique</h1>
      </div>
      <input placeholder="search" />
      <div className="navBarButtons">
        <HomeButton setShowItemCards={setShowItemCards} setBackgroundWhite={setBackgroundWhite} />
        <StoreButton setShowItemCards={setShowItemCards} setBackgroundWhite={setBackgroundWhite} isBackgroundWhite={isBackgroundWhite} />
        <div className="navBarButton">
          <button>Cart</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

