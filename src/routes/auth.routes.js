const express = require('express');
const useCase  = require('../usecases/auth.usecase');


const router = express.Router()

// POST /auth/login Para otorgar un nuevo JWT cada que es llamado

router.post('/login', async (req, res) => {
    try{
        const { email, password } = req.body
        const token = await useCase.login(email, password)
        res.json({
            success:true,
            data: { token }
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