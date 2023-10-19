import React from 'react';

function StoreButton({ setShowItemCards, setBackgroundWhite, isBackgroundWhite }) {
  const handleStoreButtonClick = () => {
    setShowItemCards(true);
    if (!isBackgroundWhite) {
      setBackgroundWhite(true);
    }
  };

  return (
    <div className="navBarButton">
      <button onClick={handleStoreButtonClick}>Store</button>
    </div>
  );
}

export default StoreButton;
