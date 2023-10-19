import React, { useState } from 'react';
import shoppingImage from './shopping.jpg'; 

function HomeButton({ setShowItemCards }) {
  const [isBackgroundImage, setBackgroundImage] = useState(false);

  const handleHomeButtonClick = () => {
    setShowItemCards(false);
    setBackgroundImage(true);
  };

  return (
    <div className="navBarButton">
      <button onClick={handleHomeButtonClick}>Home</button>
      <style>
        {`
          body {
            background: url(${isBackgroundImage ? shoppingImage : ''}) no-repeat center center fixed;
            background-size: cover;
          }
        `}
      </style>
    </div>
  );
}

export default HomeButton;





