import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import ShopPage from "./components/ShopPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ServicesPage from "./components/ServicesPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import ProtectedRoute from "./components/ProtectedRoute";
import ChatBot from "./components/ChatBot";

function App() {
    return (
        <Router>
            <div>
                {/* Routes to different pages */}
                <Routes>
                    {/* Landing page - accessible to everyone */}
                    <Route path="/" element={<LandingPage />} />
                    
                    {/* Authentication routes - accessible to everyone */}
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    
                    {/* Protected routes - only accessible to authenticated users */}
                    <Route 
                        path="/home" 
                        element={
                            <ProtectedRoute>
                                <HomePage />
                                <ChatBot />
                            </ProtectedRoute>
                        } 
                    />
                    <Route 
                        path="/shop" 
                        element={
                            <ProtectedRoute>
                                <ShopPage />
                                <ChatBot />
                            </ProtectedRoute>
                        } 
                    />
                    <Route 
                        path="/about" 
                        element={
                            <ProtectedRoute>
                                <AboutPage />
                                <ChatBot />
                            </ProtectedRoute>
                        } 
                    />
                    <Route 
                        path="/contact" 
                        element={
                            <ProtectedRoute>
                                <ContactPage />
                                <ChatBot />
                            </ProtectedRoute>
                        } 
                    />
                    <Route 
                        path="/services" 
                        element={
                            <ProtectedRoute>
                                <ServicesPage />
                                <ChatBot />
                            </ProtectedRoute>
                        } 
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
