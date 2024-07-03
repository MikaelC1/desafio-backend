const mongoose = require('mongoose')
const modelName = 'Posts'

const hashtagSchema = new mongoose.Schema({
    hashtag: {
        type: String,
        minLength: 1,
        maxLength: 22
    }
})

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 100
    },
    image: {
        type: String,
        required: false
    },
    body: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 200,
    },
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        required: false
    },
    hashtags: [hashtagSchema]
})

module.exports = mongoose.model(modelName, schema)