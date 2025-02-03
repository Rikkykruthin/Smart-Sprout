const express = require('express');
const {
    register,
    login,
    getUserProfile,
} = require('../controllers/authController');
const { isAuthenticatedUser } = require('../middleware/authMiddleware');

const router = express.Router();

// User Registration
router.post('/register', register);

// User Login
router.post('/login', login);

// Get Logged-in User Profile
router.get('/me', isAuthenticatedUser, getUserProfile);

module.exports = router;
