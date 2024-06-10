require('dotenv').config()

const PORT = process.env.PORT || 8080;
const server = require('./src/server')
const db = require('./src/lib/db')

db.connect()
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`)
        })
    })
    .catch((error => {
        console.log('DB connection failed', error)
    }))