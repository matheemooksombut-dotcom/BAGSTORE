import { useState } from "react";
import products from "../data/products";

const Product = ({ id }) => {
    const [hovered, setHovered] = useState(false);

    const product = products.find(
        item => item.id === id
    );

    return (
        <div
            className="img-container"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img
                src={product.img1}
                className={`img-item base-img ${hovered ? "fade-out" : ""}`}
            />

            <img
                src={product.img2}
                className={`img-item hover-img ${hovered ? "fade-in" : ""}`}
            />
        </div>
    );
};

export default Product;