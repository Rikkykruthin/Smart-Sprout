import React from 'react';
import '../styles/AboutPage.css';

const AboutPage = () => {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Logo"
                        />
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
                            <li className="nav-item"><a className="nav-link active" href="/about">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Company Overview */}
            <section className="container py-5">
                <h1 className="section-title">About Smart Sprout</h1>
                <p className="text-center lead">
                    Empowering farmers worldwide with innovative technology to build sustainable,
                    smarter agriculture for future generations.
                </p>
            </section>

            {/* Timeline */}
            <section className="container py-5">
                <h2 className="section-title">Our Journey</h2>
                <div className="timeline">
                    <div className="timeline-item left">
                        <div className="timeline-content">
                            <h5>2018 - Founded</h5>
                            <p>Smart Sprout began with a mission to revolutionize agriculture through AI-driven technology.</p>
                        </div>
                    </div>
                    <div className="timeline-item right">
                        <div className="timeline-content">
                            <h5>2020 - First IoT Product Launched</h5>
                            <p>We launched our first IoT-based soil monitoring system, impacting 500+ farms.</p>
                        </div>
                    </div>
                    <div className="timeline-item left">
                        <div className="timeline-content">
                            <h5>2022 - Expanded Globally</h5>
                            <p>Our solutions reached international markets, supporting sustainable farming worldwide.</p>
                        </div>
                    </div>
                    <div className="timeline-item right">
                        <div className="timeline-content">
                            <h5>2023 - Recognized as Industry Leader</h5>
                            <p>Received global recognition for our contribution to sustainable agriculture practices.</p>
                        </div>
                    </div>
                    <div className="timeline-item left">
                        <div className="timeline-content">
                            <h5>2024 - Launch of Smart Irrigation Systems</h5>
                            <p>Introduced cutting-edge irrigation solutions designed to conserve water and enhance efficiency.</p>
                        </div>
                    </div>
                    <div className="timeline-item right">
                        <div className="timeline-content">
                            <h5>2025 - Vision for Future Growth</h5>
                            <p>Set ambitious goals to expand our technological reach to underserved agricultural regions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet the Team */}
            <section className="container py-5">
                <h2 className="section-title">Meet the Team</h2>
                <div className="row text-center">
                    <div className="col-md-4">
                        <div className="team-card">
                            <img
                                src="https://i.pinimg.com/originals/9d/40/09/9d4009314d72fc9ffeb686275de2ea05.jpg"
                                alt="Virat Kohli"
                            />
                            <h5>Virat Kohli</h5>
                            <p>CEO & Founder</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="team-card">
                            <img
                                src="https://assets.gqindia.com/photos/5f3a7488b74db60fdc97b31d/16:9/w_1920,h_1080,c_limit/MS%20Dhoni.jpg"
                                alt="M.S Dhoni"
                            />
                            <h5>M.S Dhoni</h5>
                            <p>CTO</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="team-card">
                            <img
                                src="https://m.media-amazon.com/images/I/51IvTs7CE+L._AC_UF1000,1000_QL80_.jpg"
                                alt="Rohit Sharma"
                            />
                            <h5>Rohit Sharma</h5>
                            <p>Lead Agricultural Scientist</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Values */}
            <section className="container py-5">
                <h2 className="section-title">Our Values</h2>
                <div className="row">
                    <div className="col-md-3">
                        <div className="value-card">
                            <h5>Innovation</h5>
                            <p>Pushing boundaries with technology.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="value-card">
                            <h5>Sustainability</h5>
                            <p>Ensuring eco-friendly farming.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="value-card">
                            <h5>Customer Focus</h5>
                            <p>Prioritizing farmer success.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="value-card">
                            <h5>Reliability</h5>
                            <p>Delivering trusted solutions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="call-to-action">
                <h2>Join Us in Building a Smarter Future</h2>
                <p>Learn more about how Smart Sprout is empowering farmers worldwide.</p>
                <a href="/contact">Contact Us</a>
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

export default AboutPage;
