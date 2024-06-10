const mongoose = require('mongoose')
const modelName = 'Users'

const schema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 30
    },
    profilePic: {
        type:String,
        required: false
    },
    email: {
        type: String,
        required: true,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    },
    password: {
        type:String,
        maxLength: 100,
        minLength: 1,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        required: false
    },
})

module.exports = mongoose.model(modelName, schema)