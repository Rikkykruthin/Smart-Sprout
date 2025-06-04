import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('authToken');
    const user = localStorage.getItem('user');
    
    // Check if user is authenticated
    if (!token || !user) {
        // Redirect to landing page if not authenticated
        return <Navigate to="/" replace />;
    }
    
    // Return the protected component if authenticated
    return children;
};

export default ProtectedRoute; 