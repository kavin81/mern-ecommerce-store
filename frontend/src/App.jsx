import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import OurStory from "./pages/OurStory/OurStory";
import Connect from "./pages/Connect/Connect";
import AuthPage from "./pages/Auth/Auth";
import ProductDetail from "./pages/Product/Product";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/our-story" element={<OurStory />} />
                    <Route path="/connect" element={<Connect />} />
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="/product/:id" element={<ProductDetail/>} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
