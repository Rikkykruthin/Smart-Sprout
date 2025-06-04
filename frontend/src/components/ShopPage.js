import React, { useState, useEffect } from 'react';
import '../styles/ShopPage.css';

const ShopPage = () => {
    const [priceRange, setPriceRange] = useState(1000);
    const [category, setCategory] = useState('all');
    const [rating, setRating] = useState('all');
    const [products, setProducts] = useState([]);

    // Fetch products from API
    useEffect(() => {
        const fetchProducts = async () => {
            // Replace with your backend API endpoint
            const response = await fetch('/api/products');
            const data = await response.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    const applyFilters = () => {
        // Simulate filter API call
        console.log('Applying filters:', { category, priceRange, rating });
        // Send filters to the backend to fetch filtered products
    };

    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="/">Smart Sprout</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                            <li className="nav-item"><a className="nav-link active" href="/shop">Shop</a></li>
                            <li className="nav-item"><a className="nav-link" href="/services">Services</a></li>
                            <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Filter Section */}
            <section className="container py-3">
                <div className="filter-section">
                    <h5>Filter Products</h5>
                    <div className="row">
                        <div className="col-md-3">
                            <label htmlFor="category">Category</label>
                            <select
                                id="category"
                                className="form-control"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="all">All</option>
                                <option value="seeds">Seeds</option>
                                <option value="fertilizers">Fertilizers</option>
                                <option value="tools">Tools</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="price">
                                Price Range: <span id="price-display" className="price-display">$0 - ${priceRange}</span>
                            </label>
                            <input
                                type="range"
                                id="price"
                                className="form-range"
                                min="0"
                                max="1000"
                                step="10"
                                value={priceRange}
                                onChange={(e) => setPriceRange(e.target.value)}
                            />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="rating">Rating</label>
                            <select
                                id="rating"
                                className="form-control"
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                            >
                                <option value="all">All</option>
                                <option value="4">4 Stars & Up</option>
                                <option value="3">3 Stars & Up</option>
                            </select>
                        </div>
                        <div className="col-md-3 d-flex align-items-end">
                            <button className="btn btn-primary w-100" onClick={applyFilters}>Apply Filters</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Shop Section */}
            <section className="container py-5">
                <h1 className="section-title">Shop Our Products</h1>
                <div className="row g-4">
                    {products.map((product, index) => (
                        <div key={index} className="col-md-3">
                            <div className="product-card">
                                <span className="category-badge">{product.category}</span>
                                {product.topSeller && <span className="top-seller">Top Seller</span>}
                                <img src={product.img} alt={product.name} className="card-img-top" />
                                <div className="card-body">
                                    <h5>{product.name}</h5>
                                    <p>{product.price}</p>
                                    <div className="product-rating">
                                        {'★'.repeat(Math.floor(product.rating))}
                                        {product.rating % 1 ? '☆' : ''}
                                    </div>
                                    <button className="btn btn-custom">Add to Cart</button>
                                    <button className="btn btn-custom">Buy Now</button>
                                </div>
                                <div className="product-details">
                                    <p>Category: {product.category} | Rating: {product.rating}★</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer>
                <p>&copy; 2024 Smart Sprout. All Rights Reserved. | <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a></p>
            </footer>
        </>
    );
};

export default ShopPage;
