const createError = require('http-errors');
const jwt = require('../lib/jwt');
const useCase = require('../usecases/users.usecase');

async function auth(req, res, next) {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw createError(401, "JWT is required");
        }

        const token = authHeader.split(' ')[1];
        const payload = jwt.verify(token);
        const user = await useCase.getById(payload.id);
        
        if (!user) {
            throw createError(401, "User not found");
        }

        req.user = user;
        next();

    } catch (error) {
        res.status(error.status || 401).json({
            success: false,
            error: error.message
        });
    }
}

module.exports = auth;
