import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ShopPage from "./components/ShopPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ServicesPage from "./components/ServicesPage";
function App() {
    return (
        <Router>
            <div>
                {/* Routes to different pages */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
