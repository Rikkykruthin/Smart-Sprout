import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
    const [user, setUser] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is logged in
        const userData = localStorage.getItem('user');
        const token = localStorage.getItem('authToken');
        
        if (userData && token) {
            setUser(JSON.parse(userData));
        }

        // Handle scroll effect for navbar
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        // Track mouse movement for interactive effects
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleEnterApp = () => {
        if (user) {
            navigate('/home');
        } else {
            navigate('/login');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        setUser(null);
    };

    return (
        <div className="landing-page">
            {/* Navigation */}
            <nav className={`landing-nav ${isScrolled ? 'scrolled' : ''}`}>
                <div className="nav-container">
                    <div className="logo">
                        <span className="logo-icon">🌱</span>
                        <span className="logo-text">Smart Sprout</span>
                    </div>
                    <div className="nav-buttons">
                        {user ? (
                            <div className="user-menu">
                                <span className="welcome-text">Hello, {user.name} 👋</span>
                                <button onClick={handleEnterApp} className="btn-primary">
                                    Enter Dashboard
                                </button>
                                <button onClick={handleLogout} className="btn-secondary">
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="auth-buttons">
                                <Link to="/login" className="btn-secondary">
                                    Login
                                </Link>
                                <Link to="/register" className="btn-primary">
                                    Get Started
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background">
                    <div className="floating-particles">
                        {[...Array(60)].map((_, i) => (
                            <div 
                                key={i} 
                                className="particle" 
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 25}s`,
                                    animationDuration: `${12 + Math.random() * 18}s`
                                }}
                            />
                        ))}
                    </div>
                </div>
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            <span className="gradient-text">Smart Sprout</span>
                            <br />
                            <span className="subtitle">Next-Gen Agricultural Intelligence</span>
                        </h1>
                        <p className="hero-description">
                            Experience the future of farming with AI-powered insights, real-time monitoring, 
                            and predictive analytics. Transform your agricultural operations with cutting-edge 
                            technology that grows with you.
                        </p>
                        <div className="hero-buttons">
                            <button onClick={handleEnterApp} className="btn-hero-primary">
                                {user ? 'Launch Dashboard' : 'Start Journey'}
                                <span className="btn-icon">🚀</span>
                            </button>
                            <button className="btn-hero-secondary" onClick={() => {
                                document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
                            }}>
                                Discover More
                                <span className="btn-icon">⚡</span>
                            </button>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="floating-garden" style={{
                            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
                        }}>
                            <div className="plant plant-1">🌱</div>
                            <div className="plant plant-2">🌿</div>
                            <div className="plant plant-3">🍃</div>
                            <div className="plant plant-4">🌾</div>
                            <div className="plant plant-5">🌸</div>
                            <div className="plant plant-6">🌺</div>
                        </div>
                    </div>
                </div>
                <div className="scroll-indicator">
                    <div className="scroll-arrow"></div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="features">
                <div className="container">
                    <h2 className="section-title">
                        <span className="title-icon">⚡</span>
                        Revolutionary Features
                    </h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🤖</div>
                            <h3>AI-Powered Analytics</h3>
                            <p>Advanced machine learning algorithms analyze crop patterns, predict yields, and optimize growth conditions for maximum productivity.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📊</div>
                            <h3>Real-Time Monitoring</h3>
                            <p>Live tracking of soil moisture, temperature, pH levels, and nutrient content with instant alerts and actionable insights.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🌱</div>
                            <h3>Sustainable Solutions</h3>
                            <p>Eco-friendly farming practices powered by data science to reduce waste, conserve resources, and maximize yield efficiency.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📱</div>
                            <h3>Mobile-First Platform</h3>
                            <p>Access your farm data anywhere with our responsive, touch-optimized interface designed for modern farmers on the go.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🔗</div>
                            <h3>IoT Integration</h3>
                            <p>Seamlessly connect sensors, drones, and automated systems for comprehensive farm automation and data collection.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📈</div>
                            <h3>Predictive Analytics</h3>
                            <p>Advanced forecasting models predict market trends, weather patterns, and optimal harvest times for strategic decision-making.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-number">1,200+</div>
                            <div className="stat-label">Active Farmers</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">98%</div>
                            <div className="stat-label">Yield Improvement</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">Live Monitoring</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">500K+</div>
                            <div className="stat-label">Plants Tracked</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Revolutionize Your Farm?</h2>
                        <p>Join the agricultural revolution and discover how Smart Sprout can transform your farming operations with cutting-edge technology and actionable insights.</p>
                        <div className="cta-buttons">
                            {user ? (
                                <button onClick={handleEnterApp} className="btn-cta-primary">
                                    Access Dashboard
                                </button>
                            ) : (
                                <>
                                    <Link to="/register" className="btn-cta-primary">
                                        Start Free Trial
                                    </Link>
                                    <Link to="/login" className="btn-cta-secondary">
                                        Sign In
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="landing-footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-logo">
                            <span className="logo-icon">🌱</span>
                            <span className="logo-text">Smart Sprout</span>
                        </div>
                        <p>© 2024 Smart Sprout. Pioneering the future of intelligent agriculture.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage; 