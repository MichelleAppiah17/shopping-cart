import React from 'react';

function ItemCards({ products }) {
  return (
    <div className='itemCards'>
      {products.map((product, index) => (
        <div className='itemCard' key={index}>
          <div className='image'>
            <img src={product.image} alt={product.title} />
          </div>
          <div className='info'>
             <div className='name'>{product.title}</div>
            <div className='price'>{`$${product.price}`}</div>
          </div>
          <div>
            <button className='addToCartBtn'>ADD TO CART</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemCards;

