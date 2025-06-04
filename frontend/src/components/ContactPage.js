import React from 'react';
import '../styles/ContactPage.css';

const ContactPage = () => {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src="https://via.placeholder.com/40" alt="Logo" />
                        Smart Sprout
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="bi bi-list"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="/shop">Shop</a></li>
                            <li className="nav-item"><a className="nav-link" href="/services">Services</a></li>
                            <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                            <li className="nav-item"><a className="nav-link active" href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Contact Section */}
            <section className="container py-5">
                <h1 className="section-title">Contact Us</h1>
                <div className="row">
                    {/* Contact Information */}
                    <div className="col-md-5 contact-section">
                        <div className="contact-info">
                            <h5>Our Address</h5>
                            <p>123 Green Street, Farming City, USA</p>
                        </div>
                        <div className="contact-info">
                            <h5>Email Us</h5>
                            <p>support@smartsprout.com</p>
                        </div>
                        <div className="contact-info">
                            <h5>Call Us</h5>
                            <p>+1 234 567 890</p>
                        </div>
                        <div className="social-links text-center">
                            <a href="https://facebook.com/smartsprout"><i className="bi bi-facebook"></i></a>
                            <a href="https://twitter.com/smartsprout"><i className="bi bi-twitter"></i></a>
                            <a href="https://instagram.com/smartsprout"><i className="bi bi-instagram"></i></a>
                            <a href="https://linkedin.com/company/smartsprout"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-md-7">
                        <form className="contact-section">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Your Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Your Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="subject" className="form-label">Subject</label>
                                <input type="text" className="form-control" id="subject" placeholder="Enter your subject" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Your Message</label>
                                <textarea className="form-control" id="message" rows="5" placeholder="Write your message"></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn submit-btn px-5">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Google Map Embed */}
                <div className="map-container">
                    <h3 className="section-title mt-5">Find Us Here</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509294!2d144.95373531531677!3d-37.81627927975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e28c9f1c56d0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1640918621563!5m2!1sen!2sus"
                        allowFullScreen=""
                        loading="lazy"
                        title="Smart Sprout Location"
                    ></iframe>
                </div>
            </section>

            {/* Footer */}
            <footer>
                <p>
                    &copy; 2024 Smart Sprout. All Rights Reserved. | <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
                </p>
            </footer>
        </>
    );
};

export default ContactPage;
