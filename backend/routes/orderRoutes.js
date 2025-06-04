const express = require('express');
const {
    createOrder,
    getOrderDetails,
    getMyOrders,
    getAllOrders,
    updateOrderStatus,
    deleteOrder,
} = require('../controllers/orderController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

// Create a new order
router.post('/new', protect, createOrder);

// Get details of a specific order
router.get('/:id', protect, getOrderDetails);

// Get all orders of the logged-in user
router.get('/me', protect, getMyOrders);

// Admin routes
router.get('/', protect, admin, getAllOrders); // Get all orders (Admin)
router.put('/:id', protect, admin, updateOrderStatus); // Update order status (Admin)
router.delete('/:id', protect, admin, deleteOrder); // Delete order (Admin)

module.exports = router;
