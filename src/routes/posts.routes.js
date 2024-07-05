const express = require('express')
const useCase = require('../usecases/posts.usescase')
const jwt = require('../lib/jwt')
const auth = require('../middlewares/auth.middleware')

const router = express.Router()


// POST /posts / Para crear un nuevo post, el post creado será asignado al usuario que llamó este endpoint

router.post('/', auth, async (req, res) => {
    try {
        const postData = {
            ...req.body,
            user: req.user._id
        }

        const createdPost = await useCase.create(postData);
        res.json({
            success: true,
            data: { createdPost }
        });
    } catch(error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message
        });
    }
});

// PATCH /posts/:id / Para actualizar la información de un post por id

router.patch('/:id', auth, async (req, res) => {
    try{
        const userId = req.user._id
        const { id } = req.params
        const updatedPost = await useCase.update(id, userId, req.body )
        res.json({
            success: true,
            data: { post: updatedPost }
        })
    }catch(error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message
        })
    }
})

// GET /posts Para listar todos los posts - Debe soportar el filtrado por titulo usando un query param llamado

router.get('/', async (req, res) => {
    try{
        const { search } = req.query
        const posts = await useCase.get(search)
        res.json({
            success: true,
            data: { posts }
        })
    } catch(error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message
        })
    }
})

// DELETE /posts/:id Para permitir borrar un post - Solo el usuario dueño del post debe ser capaz de ejecutar esta acción

router.delete('/:id', auth, async (req, res) => {
    try {
        const userId = req.user._id
        const { id } = req.params;
        const deletedPost = await useCase.deleteById(id, userId)
        res.json({
            success: true,
            data: { post: deletedPost }
        });
    } catch(error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message
        });
    }
});

module.exports = router