const http = require('http');
const dotenv = require('dotenv');
const app = require('./app');

// Load environment variables
dotenv.config();

// Get port from environment and store it in Express
const PORT = process.env.PORT || 5000;

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
