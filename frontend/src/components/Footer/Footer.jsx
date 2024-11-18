import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3 className="footer-heading">Shop</h3>
                    <ul className="footer-list">
                        <li>
                            <a href="#new-arrivals">New Arrivals</a>
                        </li>
                        <li>
                            <a href="#best-sellers">Best Sellers</a>
                        </li>
                        <li>
                            <a href="#sale">Sale</a>
                        </li>
                        <li>
                            <a href="#gift-cards">Gift Cards</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3 className="footer-heading">Help</h3>
                    <ul className="footer-list">
                        <li>
                            <a href="#faq">FAQ</a>
                        </li>
                        <li>
                            <a href="#shipping">Shipping & Returns</a>
                        </li>
                        <li>
                            <a href="#size-guide">Size Guide</a>
                        </li>
                        <li>
                            <a href="#contact">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3 className="footer-heading">About</h3>
                    <ul className="footer-list">
                        <li>
                            <a href="#our-story">Our Story</a>
                        </li>
                        <li>
                            <a href="#sustainability">Sustainability</a>
                        </li>
                        <li>
                            <a href="#careers">Careers</a>
                        </li>
                        <li>
                            <a href="#press">Press</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3 className="footer-heading">Connect</h3>
                    <ul className="footer-list">
                        <li>
                            <a href="#instagram">Instagram</a>
                        </li>
                        <li>
                            <a href="#twitter">Twitter</a>
                        </li>
                        <li>
                            <a href="#facebook">Facebook</a>
                        </li>
                        <li>
                            <a href="#pinterest">Pinterest</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 ShopVault. All rights reserved.</p>
                <p>
                    <a href="#privacy">Privacy Policy</a> |{" "}
                    <a href="#terms">Terms of Service</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
