import React, { useState } from 'react';
import ItemCards from './ItemCards';

function StoreButton({ setShowItemCards, setBackgroundWhite }) {
  const [isBackgroundImage, setBackgroundImage] = useState(false);

  const handleStoreButtonClick = () => {
    setShowItemCards(true);
    setBackgroundImage(false);
    setBackgroundWhite(true); 
  };

  return (
    <div className="navBarButton">
      <button onClick={handleStoreButtonClick}>Store</button>
      <style>
        {`
          body {
            background-color: ${isBackgroundImage ? 'transparent' : 'white'};
          }
        `}
      </style>
      <ItemCards/>
    </div>
  );
}

export default StoreButton;


