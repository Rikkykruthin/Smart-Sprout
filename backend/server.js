const http = require('http');
const dotenv = require('dotenv');
const app = require('./app');

// Load environment variables
dotenv.config();

// Set fallback environment variables
process.env.JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key-for-development-only';
process.env.JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';
process.env.MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/smart-sprout';

// Get port from environment and store it in Express
const PORT = process.env.PORT || 5001;

// Create the HTTP server
const server = http.createServer(app);

// Start the server
server.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.error(`Unhandled Rejection: ${err.message}`);
    server.close(() => process.exit(1));
});
