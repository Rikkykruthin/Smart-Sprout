const express = require('express');
const router = express.Router();
const { 
    registerUser, 
    loginUser, 
    getUserProfile, 
    updateUserProfile 
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

// User registration route
router.post('/register', registerUser);

// User login route
router.post('/login', loginUser);

// Get logged-in user's profile
router.get('/profile', protect, getUserProfile);

// Update logged-in user's profile
router.put('/profile', protect, updateUserProfile);

module.exports = router;
