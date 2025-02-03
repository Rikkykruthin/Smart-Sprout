const express = require('express');
const {
    createOrder,
    getOrderDetails,
    getMyOrders,
    getAllOrders,
    updateOrderStatus,
    deleteOrder,
} = require('../controllers/orderController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/authMiddleware');

const router = express.Router();

// Create a new order
router.post('/new', isAuthenticatedUser, createOrder);

// Get details of a specific order
router.get('/:id', isAuthenticatedUser, getOrderDetails);

// Get all orders of the logged-in user
router.get('/me', isAuthenticatedUser, getMyOrders);

// Admin routes
router.get('/', isAuthenticatedUser, authorizeRoles('admin'), getAllOrders); // Get all orders (Admin)
router.put('/:id', isAuthenticatedUser, authorizeRoles('admin'), updateOrderStatus); // Update order status (Admin)
router.delete('/:id', isAuthenticatedUser, authorizeRoles('admin'), deleteOrder); // Delete order (Admin)

module.exports = router;
