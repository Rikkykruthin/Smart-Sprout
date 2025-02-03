class ErrorResponse extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

const handleError = (err, res) => {
    let { message, statusCode } = err;

    // Default status code and message
    statusCode = statusCode || 500;
    message = message || 'Internal Server Error';

    res.status(statusCode).json({
        success: false,
        error: message,
    });
};

module.exports = {
    ErrorResponse,
    handleError,
};
