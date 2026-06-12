import axios from "axios";
import { createContext, useCallback, useEffect, useRef, useState } from "react";
import products from "../../data/products";

export const CartContext = createContext();

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const getCartId = () => {
    let cartId = localStorage.getItem("bagstoreCartId");

    if (!cartId) {
        cartId = crypto.randomUUID();
        localStorage.setItem("bagstoreCartId", cartId);
    }

    return cartId;
};

const normalizeItems = (items = []) => (
    items.map(item => ({
        ...item,
        image: item.img
    }))
);

export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItemsState] = useState([]);
    const [cartError, setCartError] = useState("");
    const cartItemsRef = useRef([]);
    const cartId = useRef(getCartId()).current;

    const syncCart = useCallback((cart) => {
        const items = normalizeItems(cart.items);
        cartItemsRef.current = items;
        setCartItemsState(items);
        setCartCount(cart.totalQuantity || 0);
    }, []);

    useEffect(() => {
        const loadCart = async () => {
            try {
                const response = await axios.get(`${API_URL}/carts/${cartId}`);
                syncCart(response.data.data);
            } catch (error) {
                setCartError(error.response?.data?.message || "โหลดตะกร้าสินค้าไม่สำเร็จ");
            }
        };

        loadCart();
    }, [cartId, syncCart]);

    // Keeps the existing product pages working while persisting new items.
    const setCartItems = async (updater) => {
        const previousItems = cartItemsRef.current;
        const nextItems = typeof updater === "function"
            ? updater(previousItems)
            : updater;
        const addedItem = nextItems.at(-1);

        if (!addedItem || nextItems.length <= previousItems.length) {
            cartItemsRef.current = nextItems;
            setCartItemsState(nextItems);
            return;
        }

        const product = products.find(item => item.id === addedItem.id);
        const variant = product?.variants.find(
            item => item.image === addedItem.image
        ) || product?.variants[0];

        try {
            setCartError("");
            const response = await axios.post(
                `${API_URL}/carts/${cartId}/items`,
                {
                    id: addedItem.id,
                    name: addedItem.name,
                    price: addedItem.price,
                    colors: variant?.color || "ไม่ระบุสี",
                    img: addedItem.image,
                    quantity: addedItem.quantity
                }
            );
            syncCart(response.data.data);
        } catch (error) {
            setCartError(error.response?.data?.message || "เพิ่มสินค้าลงตะกร้าไม่สำเร็จ");
        }
    };

    const removeCartItem = async (itemId) => {
        try {
            setCartError("");
            const response = await axios.delete(
                `${API_URL}/carts/${cartId}/items/${itemId}`
            );
            syncCart(response.data.data);
        } catch (error) {
            setCartError(error.response?.data?.message || "ลบสินค้าไม่สำเร็จ");
        }
    };

    return (
        <CartContext.Provider
            value={{
                cartCount,
                setCartCount,
                cartItems,
                setCartItems,
                removeCartItem,
                cartError
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
