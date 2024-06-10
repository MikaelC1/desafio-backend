const createError = require('http-errors')
const jwt = require('../lib/jwt')
const useCase = require('../usecases/users.usecase')

async function auth(req, res, next){
    try{
        const token = req.headers.authorization
        
        if(!token){
            throw createError(401, "JWT is required")
        }

        const payload = jwt.verify(token)
        
        const user = await useCase.getById(payload.id)

        req.user = user

        next()

    } catch(error){
        res.status(401)
        res.json({
            sucess:false,
            error: error.message
        })
    }
}

module.exports = auth 