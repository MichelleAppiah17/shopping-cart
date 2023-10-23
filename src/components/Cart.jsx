import React from 'react';

function Cart({
  visibility,
  products,
  removeProduct,
  onClose,
  quantityChange
}) {
  let totalCost = 0;

  if (products.length > 0) {
    totalCost = products.reduce((total, product) => {
      return total + product.price * product.count;
    }, 0);
  }

  return (
    <div className='cart' style={{ display: visibility ? 'block' : 'none' }}>
      <div className='shoppingCart'>
        <div className='cartHeader'>
          <h2>Your Cart</h2>
          <button className='btn close-btn' onClick={onClose}>
            X
          </button>
        </div>
        <div className='cartItems'>
          {products.length === 0 ? (
            <span className='emptyText'>Your Cart is Empty</span>
          ) : (
            products.map((product, index) => (
              <div className='cartItem' key={index}>
               <div>
                 <img src={product.image} alt={product.title} />
               </div>
               <div className='itemInfo'>
                  <h3>{product.title}</h3>
                  <span className='itemTotal'>
                    {`Total: $${(product.price * product.count).toFixed(2)}`}
                  </span>
                </div>
                <div className='select-and-remove'>
                <select
                  className='count'
                  value={product.count}
                  onChange={(event) => {
                    const newCount = parseInt(event.target.value, 10);
                    quantityChange(product.id, newCount);
                  }}
                >
                  {[...Array(10).keys()].map((number) => {
                    const num = number + 1;
                    return (
                      <option value={num} key={num}>
                        {num}
                      </option>
                    );
                  })}
                </select>
                <button
                  className='btn removeBtn'
                  onClick={() => removeProduct(product.id)}
                >
                  X
                </button>
                </div>
              </div>
            ))
          )}
          {products.length > 0 && (
            <div className='cartTotal'>
              <span className='totalLabel'>Total Of Items In Your Cart: </span>
              <span className='totalAmount'>{`$${totalCost.toFixed(2)}`}</span>
            </div>
          )}
          {products.length > 0 && (
            <button className='btn checkoutBtn'>proceed to checkout</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;


