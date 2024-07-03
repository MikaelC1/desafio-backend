const express = require('express')
const useCase = require('../usecases/users.usecase')

const router = express.Router()


// POST User ( Create User)

router.post('/', async (req, res) => {
    try{
        const createdUser = await useCase.create(req.body)
        res.json({
            success: true,
            data: { createdUser }
        })
    }catch(error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message
        })
    }
})

// GET /user/:id Para obtener la información de un usuario por id

router.get('/:id', async (req, res) => {
    try{
        const { id } = req.params
        const userFound = await useCase.getById(id)
        res.json({
            success: true,
            data: { userFound }
        })
    }catch(error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message
        })
    }
})

router.get("/", async (req,res) => {
    try{
        const users = await useCase.getAll()
        res.json({
            success: true,
            data: { users }
        })
    } catch(error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message
        })
    }
})


module.exports = router 