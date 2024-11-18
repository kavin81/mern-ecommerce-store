import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <div className="logo" onClick={() => window.location = "/"}>ShopVault</div>
            <nav className="nav">
                <ul className="nav-list">
                    <li>
                        <a href="/" className="nav-link">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/catalog" className="nav-link">
                            Shop Now
                        </a>
                    </li>
                    <li>
                        <a href="/our-story" className="nav-link">
                            Out Story
                        </a>
                    </li>
                    <li>
                        <a href="/connect" className="nav-link">
                            Connect
                        </a>
                    </li>
                </ul>
            </nav>
            <button className="register-btn" onClick={() => location.href = "/auth"}>
                Sign In
            </button>
        </header>
    );
}
