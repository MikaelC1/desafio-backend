const Posts = require('../models/posts.model')
const createError = require('http-errors')

async function create(postData){
    const newPost = await Posts.create(postData)
    return newPost
}

async function get(search) {
    if (!search) {
        return await Posts.find()
    }

    const posts = await Posts.find({ title: { $regex: search, $options: 'i' } })

    if (posts.length === 0) {
        throw createError(404, 'No posts found')
    }

    return posts
}


async function update(id, newData) {
    const post = await Posts.findById(id)

    if(!post) {
        throw createError(404,'Post not found')
    }

    newData.user == post.user
    newData.updated_at = new Date();
    const update = await Posts.findByIdAndUpdate(id, newData, { new: true })
    return update
}


async function deleteById(id) {    
    const postDeleted = await Posts.findByIdAndDelete(id);
    return postDeleted;
  }


module.exports = {
    create,
    get,
    update,
    deleteById
}