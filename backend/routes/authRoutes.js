const express = require('express');
const {
    register,
    login,
    getUserProfile,
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// User Registration
router.post('/register', register);

// User Login
router.post('/login', login);

// Get Logged-in User Profile
router.get('/me', protect, getUserProfile);

module.exports = router;
