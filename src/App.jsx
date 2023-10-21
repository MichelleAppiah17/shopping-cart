import React, {useState, useEffect} from "react";
import "./App.css";
import "./index.css";
import ItemCards from "./components/ItemCards";
import Cart from "./components/Cart";

function App() {
    const [products, setProducts] = useState([]);
    const [showItemCards, setShowItemCards] = useState(false);
    const [backgroundWhite, setBackgroundWhite] = useState(false);
    const [isBackgroundImage, setBackgroundImage] = useState(false);
    const [cartVisibility, setCartVisible] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [showHomeView, setShowHomeView] = useState(true);

    const handleStoreButtonClick = () => {
        setShowItemCards(true);
        setShowHomeView(false);
    };

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    useEffect(() => {
        if (showHomeView) setShowItemCards(false);
        if (showItemCards) setShowHomeView(false);
    }, [showHomeView, showItemCards]);

    const HomeView = (
        <div style={{display: "flex", width: "100%", height: "100vh"}}>
            <img
                src="src/components/shopping.jpg"
                style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                }}
            />
        </div>
    );

    const addToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);

        if (existingItem) {
            const updatedCart = cartItems.map((item) => {
                if (item.id === product.id) {
                    item.count += 1;
                }
                return item;
            });
            setCartItems(updatedCart);
        } else {
            const newItem = {...product, count: 1};
            setCartItems([...cartItems, newItem]);
        }
    };

    const removeProduct = (productId) => {
        const updatedCart = cartItems.filter((item) => item.id !== productId);
        setCartItems(updatedCart);
    };

    const quantityChange = (productId, newQuantity) => {
        const updatedCart = cartItems.map((item) => {
            if (item.id === productId) {
                item.count = parseInt(newQuantity, 10);
            }
            return item;
        });
        setCartItems(updatedCart);
    };

    const handleHomeButtonClick = () => {
        setShowItemCards(false);
        setShowHomeView(true);
    };

    return (
        <div
            style={{
                backgroundImage: "src/components/shopping.jpg",
                flex: 1,
            }}
        >
            <Cart
                visibility={cartVisibility}
                products={cartItems}
                onClose={() => setCartVisible(false)}
                removeProduct={removeProduct}
                quantityChange={quantityChange}
            />
            <div className="navBar">
                <div className="boutiqueName">
                    <h1>Chic Boutique</h1>
                </div>
                <input placeholder="search" />
                <div className="navBarButtons">
                    <div className="navBarButton">
                        <button onClick={handleHomeButtonClick}>Home</button>
                    </div>
                    <div className="navBarButton">
                        <button onClick={handleStoreButtonClick}>Store</button>
                        <style>
                            {`
          body {
            background-color: ${isBackgroundImage ? "transparent" : "white"};
          }
        `}
                        </style>
                        <ItemCards />
                    </div>
                    <div>
                        <button onClick={() => setCartVisible(true)}>
                            cart
                            {cartItems.length > 0 && (
                                <span className="itemCount">
                                    {cartItems.length}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {showHomeView && HomeView}

            {showItemCards && (
                <div className="itemCards">
                    <ItemCards products={products} addToCart={addToCart} />
                </div>
            )}
        </div>
    );
}

export default App;




