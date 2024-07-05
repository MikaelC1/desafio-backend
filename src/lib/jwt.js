const jsonwebtoken = require('jsonwebtoken');
const createError = require('http-errors');

const { JWT_SECRET } = process.env;

function sign(payload) {
    return jsonwebtoken.sign(payload, JWT_SECRET, { expiresIn: '1d' });
}

function verify(token) {
    try {
        if (!token) {
            throw createError(401, 'Token not provided');
        }
        
        if (!token.startsWith('Bearer ')) {
            throw createError(401, 'Invalid token format');
        }
        
        const tokenValue = token.split(' ')[1];
        return jsonwebtoken.verify(tokenValue, JWT_SECRET);
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            throw createError(401, 'Token expired');
        }
        throw createError(401, 'Invalid token');
    }
}
module.exports = {
    sign,
    verify
};
