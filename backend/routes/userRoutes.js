const express = require('express');
const router = express.Router();
const { 
    registerUser, 
    authUser, 
    getUserProfile, 
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser
} = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

// User registration route
router.post('/register', registerUser);

// User login route
router.post('/login', authUser);

// Get logged-in user's profile
router.get('/profile', protect, getUserProfile);

// Update logged-in user's profile
router.put('/profile', protect, updateUserProfile);

// Admin routes
router.get('/', protect, admin, getUsers);
router.delete('/:id', protect, admin, deleteUser);
router.get('/:id', protect, admin, getUserById);
router.put('/:id', protect, admin, updateUser);

module.exports = router;
