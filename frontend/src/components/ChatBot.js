import React, { useState, useRef, useEffect } from 'react';
import '../styles/ChatBot.css';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hello! I'm Smart Sprout AI, your farming assistant. Ask me anything about farming, crops, soil management, or agricultural techniques!",
            sender: 'bot',
            timestamp: new Date().toLocaleTimeString()
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async () => {
        if (!inputMessage.trim()) return;

        const userMessage = {
            id: Date.now(),
            text: inputMessage,
            sender: 'user',
            timestamp: new Date().toLocaleTimeString()
        };

        setMessages(prev => [...prev, userMessage]);
        const currentMessage = inputMessage;
        setInputMessage('');
        setIsTyping(true);

        try {
            const response = await fetch('/api/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: currentMessage }),
            });

            const data = await response.json();

            const botMessage = {
                id: Date.now() + 1,
                text: data.response || "I'm sorry, I couldn't process your request. Please try again.",
                sender: 'bot',
                timestamp: new Date().toLocaleTimeString()
            };

            setTimeout(() => {
                setMessages(prev => [...prev, botMessage]);
                setIsTyping(false);
            }, 800);

        } catch (error) {
            console.error('Error sending message:', error);
            const errorMessage = {
                id: Date.now() + 1,
                text: "I'm sorry, I'm having trouble connecting right now. Please try again later.",
                sender: 'bot',
                timestamp: new Date().toLocaleTimeString()
            };

            setTimeout(() => {
                setMessages(prev => [...prev, errorMessage]);
                setIsTyping(false);
            }, 800);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const clearChat = () => {
        setMessages([
            {
                id: 1,
                text: "Hello! I'm Smart Sprout AI, your farming assistant. Ask me anything about farming, crops, soil management, or agricultural techniques!",
                sender: 'bot',
                timestamp: new Date().toLocaleTimeString()
            }
        ]);
    };

    return (
        <>
            {/* Chat Toggle Button */}
            <div className="chat-toggle" onClick={toggleChat}>
                <div className="chat-icon">
                    {isOpen ? '✕' : '💬'}
                </div>
                {!isOpen && (
                    <div className="chat-notification">
                        <span>🌱 Ask your farming questions!</span>
                    </div>
                )}
            </div>

            {/* Chat Window */}
            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <div className="chat-header-info">
                            <div className="bot-avatar">🌱</div>
                            <div className="bot-details">
                                <h4>Smart Sprout AI</h4>
                                <span className="online-status">● Online - Farming Assistant</span>
                            </div>
                        </div>
                        <div className="chat-controls">
                            <button className="clear-chat" onClick={clearChat} title="Clear chat">
                                🗑️
                            </button>
                            <button className="close-chat" onClick={toggleChat}>✕</button>
                        </div>
                    </div>

                    <div className="chat-messages">
                        {messages.map((message) => (
                            <div key={message.id} className={`message ${message.sender}`}>
                                <div className="message-content">
                                    <p>{message.text}</p>
                                    <span className="message-time">{message.timestamp}</span>
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="message bot">
                                <div className="message-content">
                                    <div className="typing-indicator">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <span className="typing-text">Smart Sprout AI is typing...</span>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    <div className="chat-input">
                        <div className="input-container">
                            <textarea
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask me about farming, crops, soil, irrigation, pests..."
                                rows="2"
                                disabled={isTyping}
                                className="chat-textarea"
                            />
                            <button 
                                onClick={sendMessage} 
                                disabled={!inputMessage.trim() || isTyping}
                                className="send-btn"
                                title="Send message"
                            >
                                <span>🚀</span>
                            </button>
                        </div>
                        <div className="input-footer">
                            <p className="input-help">
                                💡 Press Enter to send • Shift + Enter for new line
                            </p>
                            <p className="chat-tips">
                                Try asking: "How to improve soil health?" or "Best crops for winter?"
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatBot; 