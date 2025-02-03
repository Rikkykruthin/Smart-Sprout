import React from 'react';
import { Navbar, Nav, Container, Carousel, Button, Row, Col } from 'react-bootstrap';
import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <>
            {/* Navbar */}
            <Navbar expand="lg" bg="light" variant="light" sticky="top" className="shadow-sm">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src="https://static.vecteezy.com/system/resources/thumbnails/048/343/317/small_2x/cartoon-plant-logo-in-a-pot-with-a-happy-face-png.png"
                            alt="Logo"
                            height="40"
                            className="me-2"
                        />
                        Smart Sprout
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/" active>Home</Nav.Link>
                            <Nav.Link href="/shop">Shop</Nav.Link>
                            <Nav.Link href="/services">Services</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Hero Section Slider */}
            <Carousel className="mb-5">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/1920x600"
                        alt="Slide 1"
                    />
                    <Carousel.Caption>
                        <h3>“Agriculture is the foundation of civilization.”</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/1920x600"
                        alt="Slide 2"
                    />
                    <Carousel.Caption>
                        <h3>“Sustainable farming is the key to the future.”</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/1920x600"
                        alt="Slide 3"
                    />
                    <Carousel.Caption>
                        <h3>“Farmers are the backbone of the world.”</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/1920x600"
                        alt="Slide 4"
                    />
                    <Carousel.Caption>
                        <h3>“A green revolution for a better tomorrow.”</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/1920x600"
                        alt="Slide 5"
                    />
                    <Carousel.Caption>
                        <h3>“Healthy soil, healthy planet.”</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/1920x600"
                        alt="Slide 6"
                    />
                    <Carousel.Caption>
                        <h3>“Innovation in farming brings prosperity.”</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Features Section */}
            <Container className="feature-section">
                <h2 className="text-center mb-5">Explore Our Features</h2>

                {/* Feature 1 */}
                <Row className="feature-box align-items-center">
                    <Col md={6}>
                        <img
                            src="https://media.licdn.com/dms/image/D4D12AQFhbezQTVY5hA/article-cover_image-shrink_600_2000/0/1692347595130?e=2147483647&v=beta&t=SVmWDyUQsorY5BCj_7v341phVZ70751Gcdyx6iYANRQ"
                            alt="Feature 1"
                            className="img-fluid rounded shadow"
                        />
                    </Col>
                    <Col md={6}>
                        <h3>IoT-Based Soil Monitoring</h3>
                        <p>Real-time soil data using smart IoT sensors to enhance crop management efficiency.</p>
                        <Button variant="primary" className="btn-view-more">View More</Button>
                    </Col>
                </Row>

                {/* Feature 2 */}
                <Row className="feature-box align-items-center flex-row-reverse">
                    <Col md={6}>
                        <img
                            src="https://images.ortmoragency.com/blogs/a993c2b1-4bbc-4837-80ca-c965d08f9136.jpeg"
                            alt="Feature 2"
                            className="img-fluid rounded shadow"
                        />
                    </Col>
                    <Col md={6}>
                        <h3>AI-Powered Crop Insights</h3>
                        <p>Use AI analytics to predict crop yields and manage crop health with precision.</p>
                        <Button variant="primary" className="btn-view-more">View More</Button>
                    </Col>
                </Row>

                {/* Feature 3 */}
                <Row className="feature-box align-items-center">
                    <Col md={6}>
                        <img
                            src="https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/d/4/d456d0a7acebfcdeee61f278376486457a0a24e6df472be71b9dec4c325ea02c/irrigation-system-slide1.png"
                            alt="Feature 3"
                            className="img-fluid rounded shadow"
                        />
                    </Col>
                    <Col md={6}>
                        <h3>Smart Irrigation Systems</h3>
                        <p>Automated water management systems ensuring sustainability and resource efficiency.</p>
                        <Button variant="primary" className="btn-view-more">View More</Button>
                    </Col>
                </Row>

                {/* Feature 4 */}
                <Row className="feature-box align-items-center flex-row-reverse">
                    <Col md={6}>
                        <img
                            src="https://thumbs.dreamstime.com/b/sunrise-farm-rural-landscape-hangar-red-tractor-trailer-harvest-flat-vector-illustration-cartoon-style-148878178.jpg"
                            alt="Feature 4"
                            className="img-fluid rounded shadow"
                        />
                    </Col>
                    <Col md={6}>
                        <h3>Precision Farming Tools</h3>
                        <p>Advanced tools to ensure efficient farm management and reduce resource wastage.</p>
                        <Button variant="primary" className="btn-view-more">View More</Button>
                    </Col>
                </Row>

                {/* Feature 5 */}
                <Row className="feature-box align-items-center">
                    <Col md={6}>
                        <img
                            src="https://via.placeholder.com/600x400"
                            alt="Feature 5"
                            className="img-fluid rounded shadow"
                        />
                    </Col>
                    <Col md={6}>
                        <h3>Drone-Based Crop Monitoring</h3>
                        <p>Utilize drones to monitor large farm areas and identify issues quickly.</p>
                        <Button variant="primary" className="btn-view-more">View More</Button>
                    </Col>
                </Row>

                {/* Feature 6 */}
                <Row className="feature-box align-items-center flex-row-reverse">
                    <Col md={6}>
                        <img
                            src="https://via.placeholder.com/600x400"
                            alt="Feature 6"
                            className="img-fluid rounded shadow"
                        />
                    </Col>
                    <Col md={6}>
                        <h3>Weather Forecast Integration</h3>
                        <p>Plan farming activities with real-time weather insights for maximum efficiency.</p>
                        <Button variant="primary" className="btn-view-more">View More</Button>
                    </Col>
                </Row>
            </Container>

            {/* Footer */}
            <footer className="bg-dark text-light py-4 mt-5">
                <Container>
                    <p className="mb-0 text-center">
                        &copy; 2024 Smart Sprout. All Rights Reserved. | <a href="#" className="text-primary">Privacy Policy</a> | <a href="#" className="text-primary">Terms of Service</a>
                    </p>
                </Container>
            </footer>
        </>
    );
};

export default HomePage;
