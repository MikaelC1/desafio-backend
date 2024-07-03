const Users = require('../models/users.model')
const createError = require('http-errors')
const encrypt = require('../lib/encrypt')

async function create(userData){
    const userFound = await Users.findOne({ email: userData.email })

    if(userFound){
        throw createError(409, 'Email already in use')
    }
    userData.password = await encrypt.encrypt(userData.password)

    const newUser = await Users.create(userData)
    return newUser
}

async function getById(id) {
    const user = await Users.findById(id);
    return user;
  }

async function getAll(){
    const users = await Users.find()
    return users
}

module.exports = {
    create,
    getById,
    getAll
}