import React from 'react';
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import '../styles/ServicesPage.css';

const ServicesPage = () => {
    // Sample data for visualizations
    const cropData = [
        { name: 'Wheat', yield: 120 },
        { name: 'Corn', yield: 150 },
        { name: 'Rice', yield: 90 },
        { name: 'Soybean', yield: 110 },
        { name: 'Barley', yield: 70 },
    ];

    const irrigationData = [
        { name: 'Jan', usage: 100 },
        { name: 'Feb', usage: 90 },
        { name: 'Mar', usage: 80 },
        { name: 'Apr', usage: 110 },
        { name: 'May', usage: 130 },
    ];

    const soilQualityData = [
        { name: 'High Quality', value: 40 },
        { name: 'Medium Quality', value: 35 },
        { name: 'Low Quality', value: 25 },
    ];

    const colors = ['#82ca9d', '#8884d8', '#ffc658'];

    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="/">
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
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="/shop">Shop</a></li>
                            <li className="nav-item"><a className="nav-link active" href="/services">Services</a></li>
                            <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Services Section */}
            <section className="container py-5">
                <h1 className="section-title">Our Services</h1>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card service-card">
                            <div className="card-body text-center">
                                <h5 className="card-title">IoT Monitoring</h5>
                                <p className="card-text">
                                    Real-time data monitoring for soil, water, and environment conditions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card service-card">
                            <div className="card-body text-center">
                                <h5 className="card-title">AI Crop Recommendations</h5>
                                <p className="card-text">
                                    AI-powered insights for crop selection, health, and growth.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card service-card">
                            <div className="card-body text-center">
                                <h5 className="card-title">Sustainable Irrigation</h5>
                                <p className="card-text">
                                    Smart irrigation techniques to optimize water usage.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visualization Section */}
            <section className="container py-5">
                <h2 className="section-title">Farming Insights</h2>
                <div className="row">
                    {/* Bar Chart */}
                    <div className="col-md-4">
                        <h5 className="text-center">Crop Yields (in tons)</h5>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={cropData}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="yield" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Line Chart */}
                    <div className="col-md-4">
                        <h5 className="text-center">Monthly Irrigation Usage (in liters)</h5>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={irrigationData}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="usage" stroke="#8884d8" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Pie Chart */}
                    <div className="col-md-4">
                        <h5 className="text-center">Soil Quality Distribution</h5>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={soilQualityData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    fill="#8884d8"
                                >
                                    {soilQualityData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="text-center py-5 bg-light">
                <h2>Ready to Transform Your Farm?</h2>
                <p>Contact us now to learn how Smart Sprout can optimize your farming practices.</p>
                <a href="/contact" className="btn btn-primary">
                    Get Started
                </a>
            </section>

            {/* Footer */}
            <footer>
                <p>
                    &copy; 2024 Smart Sprout. All Rights Reserved. | <a href="/privacy">Privacy Policy</a> |{' '}
                    <a href="/terms">Terms of Service</a>
                </p>
            </footer>
        </>
    );
};

export default ServicesPage;
