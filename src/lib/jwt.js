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
        return jsonwebtoken.verify(token, JWT_SECRET);
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
