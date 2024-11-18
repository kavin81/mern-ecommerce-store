import "./Home.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <div className="home">
                <div className="hero">
                    <h1 className="hero-title">ShopVault</h1>
                    <p className="hero-subtitle">Elevate Your Everyday</p>
                    <a href="/catalog" className="cta-button">
                        Explore Collection
                    </a>
                </div>
                <div className="features">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <div className="feature">
                        <h2 className="feature-title">Curated Excellence</h2>
                        <p className="feature-text">
                            Handpicked items that blend style and functionality
                        </p>
                    </div>
                    <div className="feature">
                        <h2 className="feature-title">Timeless Design</h2>
                        <p className="feature-text">
                            Products that transcend trends and stand the test of
                            time
                        </p>
                    </div>
                    <div className="feature">
                        <h2 className="feature-title">Sustainable Luxury</h2>
                        <p className="feature-text">
                            Eco-conscious choices for the discerning customer
                        </p>
                    </div>
                    <br />
                    <br />
                    <br />

                </div>
            </div>

            <Footer />
        </>
    );
}
