const Users = require('../models/users.model')
const createError = require('http-errors')
const encrypt = require('../lib/encrypt')

async function create(userData) {
    try {
        const userFound = await Users.findOne({ email: userData.email });
        if (userFound) {
            throw createError(409, 'Email or Password are incorrect');
        }

        userData.password = await encrypt.encrypt(userData.password);

        const newUser = await Users.create(userData);
        return newUser;
    } catch (error) {

        if (error.status === 409) {
            throw error;
        } else if(error.status === 500){
            throw new Error('Internal Error, please try again later');
        } else {
            throw new Error('Failed to create user');
        }
    }   
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