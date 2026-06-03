import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    return (
        <CartContext.Provider
            value={{
                cartCount,
                setCartCount,
                cartItems,
                setCartItems
            }}
        >
            {children}
        </CartContext.Provider>
    );
};