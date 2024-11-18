import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./Product.css";

import ky from "ky";

function ProductDetail() {
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await ky
                    .get(`http://localhost:3000/api/v1/product/getOne/${id}`, {
                        cache: "force-cache",
                    })
                    .json();
                setProduct(data);
            } catch (error) {
                console.error("Failed to fetch product", error);
            }
        };

        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        alert(
            "Your order has been placed! you will receive a confirmation email shortly."
        );
        window.location = "/catalog";
        console.log(`Added ${quantity} ${product.name}(s) to cart`);
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-detail-page">
            <div className="product-container">
                <div className="product-image">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                    <h1 className="product-name">{product.name}</h1>
                    <p className="product-brand">{product.brand}</p>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                    <p className="product-description">{product.description}</p>
                    <table className="product-details">
                        <tbody>
                            <tr>
                                <td>Category:</td>
                                <td>{product.category}</td>
                            </tr>
                            <tr>
                                <td>In Stock:</td>
                                <td>{product.countInStock}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="order-section">
                        <div className="quantity-selector">
                            <button
                                onClick={() =>
                                    setQuantity(Math.max(1, quantity - 1))
                                }
                            >
                                -
                            </button>
                            <span>{quantity}</span>
                            <button
                                onClick={() =>
                                    setQuantity(
                                        Math.min(product.inStock, quantity + 1)
                                    )
                                }
                            >
                                +
                            </button>
                        </div>
                        <button
                            className="add-to-cart"
                            onClick={handleAddToCart}
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
