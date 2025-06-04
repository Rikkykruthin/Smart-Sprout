const { GoogleGenerativeAI } = require('@google/generative-ai');
const asyncHandler = require('express-async-handler');

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'demo-key');

// @desc Process chatbot message
// @route POST /api/chatbot
// @access Public
const processChatMessage = asyncHandler(async (req, res) => {
    const { message } = req.body;

    if (!message || !message.trim()) {
        return res.status(400).json({
            success: false,
            error: 'Message is required'
        });
    }

    try {
        // For demo purposes, if no API key is provided, use predefined responses
        if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'demo-key') {
            const response = getDemoResponse(message);
            return res.json({
                success: true,
                response: response
            });
        }

        // Use Gemini AI for actual responses
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

        // Create a farming-focused prompt
        const farmingPrompt = `You are Smart Sprout AI, an expert agricultural assistant specializing in modern farming techniques, crop management, sustainable agriculture, and smart farming technologies. 

        Please provide helpful, accurate, and practical advice for farmers. Focus on:
        - Crop selection and rotation
        - Soil health and management
        - Irrigation and water management
        - Pest and disease control
        - Sustainable farming practices
        - Weather-related farming decisions
        - Modern farming technologies (IoT, precision farming)
        - Organic farming methods
        - Yield optimization

        Keep responses concise but informative, practical, and farmer-friendly. If the question is not related to farming, politely redirect to agricultural topics.

        User Question: ${message}

        Response:`;

        const result = await model.generateContent(farmingPrompt);
        const response = await result.response;
        const text = response.text();

        res.json({
            success: true,
            response: text.trim()
        });

    } catch (error) {
        console.error('Chatbot error:', error);
        
        // Fallback to demo response on error
        const response = getDemoResponse(message);
        res.json({
            success: true,
            response: response
        });
    }
});

// Demo responses for when API key is not available
const getDemoResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    // Crop-related responses
    if (lowerMessage.includes('crop') || lowerMessage.includes('plant') || lowerMessage.includes('grow')) {
        return "🌱 For crop selection, consider your local climate, soil type, and market demand. Popular options include wheat, corn, soybeans, and vegetables. I recommend crop rotation to maintain soil health and reduce pests naturally.";
    }
    
    // Soil-related responses
    if (lowerMessage.includes('soil')) {
        return "🌿 Healthy soil is the foundation of successful farming! Test your soil pH (ideal range 6.0-7.0 for most crops), add organic matter like compost, and practice crop rotation. Consider cover crops to prevent erosion and improve soil structure.";
    }
    
    // Irrigation responses
    if (lowerMessage.includes('water') || lowerMessage.includes('irrigation')) {
        return "💧 Smart irrigation is key to water conservation! Consider drip irrigation systems for efficiency. Water early morning or late evening to reduce evaporation. Monitor soil moisture and use weather forecasts to optimize watering schedules.";
    }
    
    // Disease and pest responses
    if (lowerMessage.includes('pest') || lowerMessage.includes('disease') || lowerMessage.includes('bug')) {
        return "🐛 Integrated Pest Management (IPM) is your best approach! Use beneficial insects, companion planting, and organic pesticides when needed. Regular field monitoring helps catch issues early. Healthy soil builds plant resistance naturally.";
    }
    
    // Organic farming
    if (lowerMessage.includes('organic')) {
        return "🌿 Organic farming builds sustainable systems! Focus on soil health with compost and cover crops, use natural pest control methods, and maintain biodiversity. Certification takes time but opens premium market opportunities.";
    }
    
    // Technology and IoT
    if (lowerMessage.includes('technology') || lowerMessage.includes('iot') || lowerMessage.includes('smart')) {
        return "📱 Smart farming technology can boost efficiency! IoT sensors monitor soil moisture and weather conditions. Drones help with crop monitoring and precision application. GPS-guided equipment reduces overlap and saves resources.";
    }
    
    // Weather-related
    if (lowerMessage.includes('weather') || lowerMessage.includes('rain') || lowerMessage.includes('drought')) {
        return "🌦️ Weather planning is crucial for farming success! Use reliable weather apps and services. Plan planting around frost dates, prepare for drought with water conservation, and have backup plans for extreme weather events.";
    }
    
    // Season-related
    if (lowerMessage.includes('season') || lowerMessage.includes('spring') || lowerMessage.includes('summer') || lowerMessage.includes('fall') || lowerMessage.includes('winter')) {
        return "🗓️ Seasonal planning maximizes your harvest! Spring: prepare soil and start seeds. Summer: maintain crops and manage water. Fall: harvest and prepare for winter. Winter: plan next year and maintain equipment.";
    }
    
    // Equipment and tools
    if (lowerMessage.includes('equipment') || lowerMessage.includes('tool') || lowerMessage.includes('tractor')) {
        return "🚜 Proper equipment maintenance saves time and money! Keep tools clean and sharp, maintain tractors regularly, and invest in quality equipment suited to your farm size. Consider sharing or renting expensive equipment.";
    }
    
    // General greeting
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('help')) {
        return "👋 Hello! I'm here to help with all your farming questions. Ask me about crops, soil health, irrigation, pest management, organic farming, or any agricultural topic. What would you like to know?";
    }
    
    // Sustainability
    if (lowerMessage.includes('sustainable') || lowerMessage.includes('environment')) {
        return "🌍 Sustainable farming protects our planet while maintaining productivity! Practice crop rotation, reduce chemical inputs, conserve water, and maintain biodiversity. These methods ensure long-term farm viability.";
    }
    
    // Default response
    return "🌱 That's an interesting question! As your farming assistant, I can help with crop selection, soil management, irrigation, pest control, organic farming, and sustainable agriculture practices. Could you be more specific about what farming topic you'd like to discuss?";
};

// @desc Get farming tips
// @route GET /api/chatbot/tips
// @access Public
const getFarmingTips = asyncHandler(async (req, res) => {
    const tips = [
        {
            id: 1,
            category: "Soil Health",
            tip: "Test your soil pH annually and add organic matter to improve soil structure and fertility.",
            icon: "🌿"
        },
        {
            id: 2,
            category: "Water Management",
            tip: "Use drip irrigation to reduce water waste and deliver nutrients directly to plant roots.",
            icon: "💧"
        },
        {
            id: 3,
            category: "Crop Rotation",
            tip: "Rotate crops to break pest cycles and naturally replenish soil nutrients.",
            icon: "🔄"
        },
        {
            id: 4,
            category: "Pest Control",
            tip: "Encourage beneficial insects with companion planting to naturally control harmful pests.",
            icon: "🐛"
        },
        {
            id: 5,
            category: "Weather Planning",
            tip: "Monitor weather forecasts regularly and plan field activities around weather conditions.",
            icon: "🌦️"
        }
    ];

    res.json({
        success: true,
        tips: tips
    });
});

module.exports = {
    processChatMessage,
    getFarmingTips
}; 