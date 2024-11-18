import "./Connect.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Connect() {
    return (
        <>
            <Header />
            <div className="connect">
                <h1 className="connect-title">Connect With Us</h1>
                <div className="connect-content">
                    <div className="support-section">
                        <h2 className="section-title">Customer Support</h2>
                        <p className="section-text">
                            We're here to help. Our dedicated support team is
                            available to assist you with any questions or
                            concerns.
                        </p>
                        <div className="contact-options">
                            <a
                                href="mailto:support@shopvault.com"
                                className="contact-button"
                            >
                                <span className="icon">✉️</span>
                                <span>Email Us</span>
                            </a>
                            <a
                                href="tel:+1234567890"
                                className="contact-button"
                            >
                                <span className="icon">📞</span>
                                <span>Call Us</span>
                            </a>
                        </div>
                    </div>
                    <div className="social-section">
                        <h2 className="section-title">Follow Us</h2>
                        <p className="section-text">
                            Stay updated with our latest collections,
                            behind-the-scenes content, and exclusive offers.
                        </p>
                        <div className="social-links">
                            <a href="#instagram" className="social-button">
                                <span className="icon">📸</span>
                                <span>Instagram</span>
                            </a>
                            <a href="#twitter" className="social-button">
                                <span className="icon">🐦</span>
                                <span>Twitter</span>
                            </a>
                            <a href="#facebook" className="social-button">
                                <span className="icon">👍</span>
                                <span>Facebook</span>
                            </a>
                            <a href="#pinterest" className="social-button">
                                <span className="icon">📌</span>
                                <span>Pinterest</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="newsletter">
                    <h2 className="section-title" style={{ textAlign: "left" }}>
                        Join Our Newsletter
                    </h2>
                    <p className="section-text">
                        Be the first to know about new collections, exclusive
                        offers, and style tips.
                    </p>
                    <form className="newsletter-form">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="newsletter-input"
                            required
                        />
                        <button type="submit" className="newsletter-button">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Connect;
