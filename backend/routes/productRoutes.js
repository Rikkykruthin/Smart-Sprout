const express = require('express');
const {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} = require('../controllers/productController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.get('/', getProducts); // Get all products
router.get('/:id', getProductById); // Get product details by ID

// Admin routes
router.post('/new', protect, admin, createProduct); // Create a new product
router.put('/:id', protect, admin, updateProduct); // Update a product
router.delete('/:id', protect, admin, deleteProduct); // Delete a product

module.exports = router;
