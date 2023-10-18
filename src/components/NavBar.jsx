import React from 'react'

function NavBar() {
  return (
    <div className='navBar'>
        <div className="boutiqueName">
            <h1>Chic Boutique</h1>
        </div>
        <input
        placeholder='search'
        />
        <div className='navBarButtons'>
            <div className="navBarButton"><button>Home</button></div>
            <div className="navBarButton"><button>Store</button></div>
            <div className="navBarButton"><button>Cart</button></div>
        </div>
    </div>
  )
}

export default NavBar