const asyncHandler = require('express-async-handler');
const Product = require('../models/Product');

// @desc Get all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
    const { category, priceRange, rating } = req.query;

    let query = {};

    // Filter by category
    if (category && category !== 'all') {
        query.category = category;
    }

    // Filter by price range
    if (priceRange) {
        const [minPrice, maxPrice] = priceRange.split('-');
        query.price = { $gte: Number(minPrice), $lte: Number(maxPrice) };
    }

    // Filter by rating
    if (rating) {
        query.rating = { $gte: Number(rating) };
    }

    const products = await Product.find(query);
    res.json(products);
});

// @desc Get a single product
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});

// @desc Create a new product
// @route POST /api/products
// @access Private/Admin
const createProduct = asyncHandler(async (req, res) => {
    const { name, price, img, category, rating, description, topSeller } = req.body;

    const product = new Product({
        name,
        price,
        img,
        category,
        rating,
        description,
        topSeller: topSeller || false,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
});

// @desc Update a product
// @route PUT /api/products/:id
// @access Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
    const { name, price, img, category, rating, description, topSeller } = req.body;

    const product = await Product.findById(req.params.id);

    if (product) {
        product.name = name || product.name;
        product.price = price || product.price;
        product.img = img || product.img;
        product.category = category || product.category;
        product.rating = rating || product.rating;
        product.description = description || product.description;
        product.topSeller = topSeller !== undefined ? topSeller : product.topSeller;

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});

// @desc Delete a product
// @route DELETE /api/products/:id
// @access Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        await product.remove();
        res.json({ message: 'Product removed' });
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};
