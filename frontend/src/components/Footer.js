import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container text-center">
                <p>&copy; 2024 Smart Sprout. All Rights Reserved.</p>
                <p>
                    <a href="/privacy-policy" className="footer-link">Privacy Policy</a> | 
                    <a href="/terms-of-service" className="footer-link"> Terms of Service</a>
                </p>
                <div className="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
