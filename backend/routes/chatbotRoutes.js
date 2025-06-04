const express = require('express');
const router = express.Router();
const { processChatMessage, getFarmingTips } = require('../controllers/chatbotController');

// @route   POST /api/chatbot
// @desc    Process chat message and get AI response
// @access  Public
router.post('/', processChatMessage);

// @route   GET /api/chatbot/tips
// @desc    Get farming tips
// @access  Public
router.get('/tips', getFarmingTips);

module.exports = router; 