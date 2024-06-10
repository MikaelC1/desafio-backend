const express = require('express')
const cors = require('cors')

const usersRoute = require('./routes/users.routes')
const postsRoute = require('./routes/posts.routes')
const authRoute = require('./routes/auth.routes')

const app = express()

// middlewares
app.use(cors())
app.use(express.json())

//rutas 
app.use('/users', usersRoute)
app.use('/posts', postsRoute)
app.use('/auth', authRoute)

app.get('/', (req, res) => {
    res.json({
        message: 'Posts API v1'
    });
});

module.exports = app