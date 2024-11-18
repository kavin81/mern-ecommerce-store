import ky from "ky";
import "./ProductList.css";

var products = await ky
    .get("http://localhost:3000/api/v1/product/getAll")
    .json();

function ProductList() {
    return (
        <div className="_catalog">
            <div className="_product-grid">
                {products.map((product) => (
                    <div key={product._id} className="_product-card" onClick={() => window.location= `/product/${product._id}`}>
                        <img
                            src={product.image}
                            alt={product.name}
                            className="_product-image"
                            width={200}
                            height={200}
                        />
                        <h2 className="_product-name">{product.name}</h2>
                        <p className="_product-price">${product.price}</p>
                        <button className="_add-to-cart-button">
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
