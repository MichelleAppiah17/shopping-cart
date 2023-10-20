import React from 'react'

function Cart({
    visibility,
    products,
    removeProduct,
    onClose,
    quantityChange
}) {
  return (
    <div className='cart' style={{display: visibility ? "block" : "none"}}>
        <div className='Cartheader'>
            <h2>Your Cart</h2>
            <button className='btn close-btn' onClick={onClose}>X</button>
        </div>
        <div className='cartItems'>
            {products.length === 0 && (
            <span className='emptyText'>
                 Your Cart is Empty
            </span>
            )}
            {products.map(product => (
              <div className='cartItem' key={product.id}>
                <img src={product.image} alt={product.name}/>
                <div className='itemInfo'>
                    <h3>{product.name}</h3>
                    <span className='itemPrice'>{product.price * product.count}$</span>
                </div>
                 <select className='count' value={product.count} onChange={(event) => {
                    quantityChange(product.id, event.target.value);
                  }}>
                    {
                        [...Array(10).keys()]
                        .map(number => {const num = number + 1;
                        return <option value={num} key={num}>{num}</option>})
                    }
                 </select>
                 <button className='btn removeBtn' onClick={() => removeProduct(product)}>remove</button>
              </div> 
            ))}
            {products.length > 0 && <button className='btn checkoutBtn'>proceed to checkout</button>}
        </div>
    </div>
  )
}

export default Cart