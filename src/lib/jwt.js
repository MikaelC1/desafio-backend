const jsonwebtoken = require('jsonwebtoken')
const createError = require('http-errors')

const { JWT_SECRET } = process.env

function sign(payload){
    return jsonwebtoken.sign(payload, JWT_SECRET, { expiresIn: '1d' })
}

function verify(token) {
    try {
        return jsonwebtoken.verify(token, JWT_SECRET);
    } catch (error) {
        throw createError(401, 'Invalid or expired token');
    }
}

module.exports = {
    sign,
    verify
}