const Users = require('../models/users.model')
const createError = require('http-errors')
const encrypt = require('../lib/encrypt')

async function create(userData) {
    try {
        // Check if the email already exists in the database
        const userFound = await Users.findOne({ email: userData.email });
        if (userFound) {
            throw createError(409, 'Email already in use');
        }

        // Encrypt the password before saving to the database
        userData.password = await encrypt.encrypt(userData.password);

        // Create a new user with the provided userData
        const newUser = await Users.create(userData);
        return newUser;
    } catch (error) {
        // Catch any errors that occur during the process
        throw new Error(error.message);
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