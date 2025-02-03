const express = require('express');
const {
    getAllProducts,
    getProductDetails,
    createProduct,
    updateProduct,
    deleteProduct,
    createProductReview,
    getProductReviews,
    deleteProductReview,
} = require('.../controllers/productController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.get('/', getAllProducts); // Get all products
router.get('/:id', getProductDetails); // Get product details by ID

// Authenticated user routes
router.put('/review', isAuthenticatedUser, createProductReview); // Create a review
router.get('/reviews/:id', getProductReviews); // Get reviews for a specific product
router.delete('/reviews', isAuthenticatedUser, deleteProductReview); // Delete a review

// Admin routes
router.post('/new', isAuthenticatedUser, authorizeRoles('admin'), createProduct); // Create a new product
router.put('/:id', isAuthenticatedUser, authorizeRoles('admin'), updateProduct); // Update a product
router.delete('/:id', isAuthenticatedUser, authorizeRoles('admin'), deleteProduct); // Delete a product

module.exports = router;
